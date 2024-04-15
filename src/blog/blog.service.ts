import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(@InjectRepository(Blog) private blogRepo:Repository<Blog>){}

  create(createBlogDto: CreateBlogDto) {
    return 'This action adds a new blog';
  }

  async findAll() {
    return await this.blogRepo.find();
  }

  //Lay theo id cua blog
  async findOne(id: number): Promise<any> {
    return await this.blogRepo.createQueryBuilder("blog")
    .innerJoinAndSelect("blog.user", "users")
    .where("blog.id = :id", { id })
    .getOne()
 
    // return await this.blogRepo.findOneBy({id})
    
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
