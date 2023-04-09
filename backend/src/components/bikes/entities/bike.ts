import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bikes' })
@ObjectType()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dailyPrice: number;

  @Column()
  @Field()
  monthlyPrice: number;

  @Column()
  @Field()
  thumbnailUrl: string;
}
