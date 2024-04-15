import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor( @InjectRepository(Course) private readonly courseRepository: Repository<Course>) {}
  async create(createCourseDto: CreateCourseDto) {
     return await this.courseRepository
     .createQueryBuilder()
     .insert()
     .into(Course)
     .values(createCourseDto)
     .execute() 
  }

   async findAll() {
    const result = await this.courseRepository.find({
      relations: ['teacher'],
      where:{teacher:{id:1}}  
    })
    return result
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  async remove(id: number) {
    return await this.courseRepository
    .createQueryBuilder()
    .delete()
    .from(Course)
    .where('id = :id', { id })
    .execute()
  }
}
