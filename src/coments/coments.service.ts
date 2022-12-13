import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';
import { Coment } from './entities/coment.entity';

@Injectable()
export class ComentsService {
  constructor(
    @InjectRepository(Coment)
    private readonly comentRepository: Repository<Coment>,
  ) {}
  async create(createComentDto: CreateComentDto) {
    try {
      const {users,posts }= createComentDto;
      const coment = this.comentRepository.create( {

      });
      await this.comentRepository.save(coment);
      return coment;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('ayuda');
    }
  }

  findAll() {
    return `This action returns all coments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coment`;
  }

  update(id: number, updateComentDto: UpdateComentDto) {
    return `This action updates a #${id} coment`;
  }

  remove(id: number) {
    return `This action removes a #${id} coment`;
  }
}
