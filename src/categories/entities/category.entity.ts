import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;
}
