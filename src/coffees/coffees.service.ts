import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input';

@Injectable()
export class CoffeesService {
  create(createCoffeeInput: CreateCoffeeInput) {
    console.log(createCoffeeInput instanceof CreateCoffeeInput);
    return createCoffeeInput;
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    console.log(typeof id);
    return null;
  }

  update(id: number, updateCoffeeInput: UpdateCoffeeInput) {
    console.log(typeof id, updateCoffeeInput);
    return null;
  }

  remove(id: number) {
    console.log(typeof id);
    return null;
  }
}
