import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewBikeInput } from './dto/new-bike.input';
import { Bike } from './entities/bike';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike) private bikeRepository: Repository<Bike>,
  ) {}

  public async getAllBikes(): Promise<Bike[]> {
    return await this.bikeRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addBike(newBikeData: NewBikeInput): Promise<Bike> {
    const newBike = this.bikeRepository.create(newBikeData);
    await this.bikeRepository.save(newBike).catch((err) => {
      new InternalServerErrorException();
    });

    return newBike;
  }
}
