import { User } from 'src/auth/entities/user.entity';
import { Coment } from 'src/coments/entities/coment.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  description: string;

  @Column('text')
  title: string;

  @ManyToOne(() => User, (user) => user.post,{
    cascade:true
  })
  user: User;

  @OneToMany(() => Coment, (coment) => coment.posts, {})
  coments: Coment;
}
