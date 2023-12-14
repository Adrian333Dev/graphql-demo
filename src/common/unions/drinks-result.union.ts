import { createUnionType } from '@nestjs/graphql';
import { Coffee } from '@coffees/entities';
import { Tea } from '@teas/entities';

export const DrinksResultUnion = createUnionType({
  name: 'DrinksResult',
  types: () => [Coffee, Tea],
});
