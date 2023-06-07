import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CoffeeTag {
  ARABIC = 'ARABIC',
  ROBUSTA = 'ROBUSTA',
}

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  title: string;

  @Column('enum', {
    enum: CoffeeTag,
    default: CoffeeTag.ARABIC,
  })
  tag: CoffeeTag;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  imageUrl: string;
}
