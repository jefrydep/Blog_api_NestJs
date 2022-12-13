import { userInfo } from 'os';
import { User } from 'src/auth/entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coments')
export class Coment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.coments)
  users: User;

  @ManyToOne(() => Post, (post) => post.coments, {
    eager: true,
  })
  posts: Post;
}
