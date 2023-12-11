import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { Coffee, Flavor } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
