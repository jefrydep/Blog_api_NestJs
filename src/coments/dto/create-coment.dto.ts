import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateComentDto {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  decription: string;

  @IsString()
  @MinLength(1)
  users: string;

  @IsString()
  @MinLength(4)
  posts: string;
}
