import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInputError } from '@nestjs/apollo';
import { PubSub } from 'graphql-subscriptions';

import { CreateCoffeeInput, UpdateCoffeeInput } from './dto';
import { Coffee, Flavor } from './entities';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorsRepository: Repository<Flavor>,
    private readonly pubSub: PubSub,
  ) {}

  async findAll() {
    return this.coffeesRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeesRepository.findOne({ where: { id } });
    if (!coffee) throw new UserInputError(`Coffee #${id} does not exist`);
    return coffee;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    const flavors = await Promise.all(
      createCoffeeInput.flavors.map((name) => this.preloadFlavorByName(name)),
    );
    const coffee = this.coffeesRepository.create({
      ...createCoffeeInput,
      flavors,
    });
    const savedCoffee = await this.coffeesRepository.save(coffee);
    this.pubSub.publish('coffeeAdded', { coffeeAdded: savedCoffee });
    return savedCoffee;
  }

  async update(id: number, dto: UpdateCoffeeInput) {
    const flavors =
      dto.flavors &&
      (await Promise.all(
        dto.flavors.map((name) => this.preloadFlavorByName(name)),
      ));
    const coffee = await this.coffeesRepository.preload({
      id,
      ...dto,
      flavors,
    });
    if (!coffee) throw new UserInputError(`Coffee #${id} does not exist`);
    return this.coffeesRepository.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.coffeesRepository.remove(coffee);
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorsRepository.findOne({
      where: { name },
    });
    if (existingFlavor) return existingFlavor;
    return this.flavorsRepository.create({ name });
  }
}
