import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesResolver } from './bikes.resolver';
import { BikesService } from './bikes.service';
import { Bike } from './entities/bike';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  providers: [BikesService, BikesResolver],
  exports: [BikesService],
})
export class BikesModule {}
