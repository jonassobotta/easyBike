import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewBikeInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Min(30, { message: 'Minimum monthly price is 30' })
  monthlyPrice: number;

  @Field((type) => Int)
  @Min(1, { message: 'Minimum daily price is 1' })
  dailyPrice: number;

  @Field()
  thumbnailUrl: string;
}
