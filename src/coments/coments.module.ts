import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';
import { Coment } from './entities/coment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ComentsController],
  providers: [ComentsService],
  imports: [TypeOrmModule.forFeature([Coment])],
  exports: [TypeOrmModule, ComentsService],
})
export class ComentsModule {}
