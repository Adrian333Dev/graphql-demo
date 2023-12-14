import { ObjectType } from '@nestjs/graphql';
import { Drink } from '@common/interfaces';

@ObjectType({
  implements: () => Drink, // ( or an array of interface such as: [Drink] )
})
export class Tea implements Drink {
  name: string;
}
