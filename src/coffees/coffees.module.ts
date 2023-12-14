import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { Coffee, Flavor } from './entities';
import { CoffeeFlavorsResolver } from './coffee-flavors.resolver';
import { PubSubModule } from '@pub-sub';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor]), PubSubModule],
  providers: [CoffeesResolver, CoffeesService, CoffeeFlavorsResolver, FlavorsByCoffeeLoader],
})
export class CoffeesModule {}
