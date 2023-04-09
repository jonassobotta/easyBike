import { Module } from '@nestjs/common';
import { BikesModule } from './bikes/bikes.module';

@Module({
  imports: [BikesModule],
})
export class ComponentsModule {}
