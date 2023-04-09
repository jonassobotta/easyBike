import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BikesService } from './bikes.service';
import { NewBikeInput } from './dto/new-bike.input';
import { Bike } from './entities/bike';

@Resolver()
export class BikesResolver {
  constructor(private bikesService: BikesService) {}

  @Query((returns) => [Bike])
  public async bikes(): Promise<Bike[]> {
    return await this.bikesService.getAllBikes().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Bike)
  public async addNewBike(
    @Args('newBikeData') newBikeData: NewBikeInput,
  ): Promise<Bike> {
    return await this.bikesService.addBike(newBikeData).catch((err) => {
      throw err;
    });
  }
}
