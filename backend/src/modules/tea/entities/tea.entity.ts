import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tea')
export class Tea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  title: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
  })
  imageUrl: string;
}
