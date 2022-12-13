import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @Column('text')
  age: string;

  @Column('text')
  adress: string;

  @Column('text')
  image: string;

  // @Column('text')
  @OneToMany(() => User, 
  (user) => user.profile, { cascade: true })
  users?: User;
}
