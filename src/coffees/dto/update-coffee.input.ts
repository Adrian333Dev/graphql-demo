import { CreateCoffeeInput } from './create-coffee.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoffeeInput extends PartialType(CreateCoffeeInput) {
  id: number;
}
