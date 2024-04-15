import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entities/chapter.entity';

@Module({
  controllers: [ChapterController],
  providers: [ChapterService],
  imports:[TypeOrmModule.forFeature([Chapter])]
})
export class ChapterModule {}
