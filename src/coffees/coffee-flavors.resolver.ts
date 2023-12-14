import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee, Flavor } from './entities';
import { FlavorsByCoffeeLoader } from './data-loader';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(
    private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader, // 👈 utilize our new loader
  ) {}

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    return this.flavorsByCoffeeLoader.load(coffee.id); // 👈
  }

  // @ResolveField('flavors', () => [Flavor])
  // async getFlavorsOfCoffee(@Parent() coffee: Coffee, @Info() info: any) {
  //   const requestedFields = info.fieldNodes[0].selectionSet.selections.map(
  //     (field: any) => `flavor.${field.name.value}`,
  //   );
  //   return this.flavorsRepository
  //     .createQueryBuilder('flavor')
  //     .innerJoin('flavor.coffees', 'coffees', 'coffees.id = :coffeeId', {
  //       coffeeId: coffee.id,
  //     })
  //     .select(requestedFields)
  //     .getMany();
  // }
}
