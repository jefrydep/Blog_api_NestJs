import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';
import { Coment } from './entities/coment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ComentsController],
  providers: [ComentsService],
  imports: [AuthModule,TypeOrmModule.forFeature([Coment])],
  exports: [TypeOrmModule, ComentsService],
})
export class ComentsModule {}
