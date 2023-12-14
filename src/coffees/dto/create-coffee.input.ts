import { CoffeeType } from '@common/enums';
import { InputType } from '@nestjs/graphql';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateCoffeeInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  flavors: string[];

  @IsOptional()
  @IsEnum(CoffeeType)
  type?: CoffeeType;
}
