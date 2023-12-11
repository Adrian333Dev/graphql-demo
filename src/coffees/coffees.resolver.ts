import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { ParseIntPipe } from '@nestjs/common';
import { Coffee } from '@graphql';

@Resolver('Coffee')
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Mutation('createCoffee')
  create(@Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput) {
    return this.coffeesService.create(createCoffeeInput);
  }

  @Query('coffees')
  async findAll(): Promise<Coffee[]> {
    return [];
  }

  @Query('coffee')
  async findOne(@Args('id', ParseIntPipe) id: number): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  @Mutation('updateCoffee')
  update(@Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput) {
    return this.coffeesService.update(updateCoffeeInput.id, updateCoffeeInput);
  }

  @Mutation('removeCoffee')
  remove(@Args('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
