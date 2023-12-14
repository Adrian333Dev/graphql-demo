import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Flavor } from './flavor.entity';
import { Drink } from '@common/interfaces';
import { CoffeeType } from '@common/enums';
import { loggerMiddleware } from '@common/middlewares';

@Entity()
@ObjectType({
  implements: () => Drink,
})
export class Coffee implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field({ middleware: [loggerMiddleware] })
  @Column()
  name: string;

  @Column()
  brand: string;

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ nullable: true })
  type?: CoffeeType;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors?: Flavor[];
}
