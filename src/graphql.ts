/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCoffeeInput {
  name: string;
  brand: string;
  flavour: string[];
}

export class UpdateCoffeeInput {
  id: number;
  name?: Nullable<string>;
  brand?: Nullable<string>;
  flavour?: Nullable<string[]>;
}

export class Coffee {
  id: number;
  name: string;
  brand: string;
  flavour: string[];
}

export abstract class IQuery {
  coffees: Coffee[];
  coffee?: Nullable<Coffee>;
}

export abstract class IMutation {
  createCoffee?: Coffee;
  updateCoffee?: Coffee;
  removeCoffee?: Nullable<Coffee>;
}

type Nullable<T> = T | null;
