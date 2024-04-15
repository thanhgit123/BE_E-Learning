import { Module } from '@nestjs/common';
import { EnrollCourseService } from './enroll_course.service';
import { EnrollCourseController } from './enroll_course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollCourse } from './entities/enroll_course.entity';

@Module({
  controllers: [EnrollCourseController],
  providers: [EnrollCourseService],
  imports:[TypeOrmModule.forFeature([EnrollCourse])]
})
export class EnrollCourseModule {}
