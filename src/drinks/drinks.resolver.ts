import { Query, Resolver } from '@nestjs/graphql';
import { Drink } from '@common/interfaces';
import { Coffee } from '@coffees/entities';
import { Tea } from '@teas/entities';
import { DrinksResultUnion } from '@common/unions';

@Resolver('Drink')
export class DrinksResolver {
  @Query(() => DrinksResultUnion, { name: 'drinks' })
  async findAll(): Promise<Drink[]> {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'Colombia';
    coffee.brand = 'Black Crow Coffee';

    const tea = new Tea();
    tea.name = 'Lipton';
    return [tea, coffee];
  }
}
