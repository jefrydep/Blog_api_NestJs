import { Coment } from 'src/coments/entities/coment.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  fullName: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @ManyToOne(() => Profile,
   (profile) => profile.users,{
    eager:true
   })
  profile: Profile;

  @OneToMany(()=> Post,
  (post)=> post.user,{
    // cascade:true
    eager:true
  })
  post?:Post



  @OneToMany(()=>Coment,
  (coments)=> coments.users,{
    eager:true
  })

  coments:Coment





}
