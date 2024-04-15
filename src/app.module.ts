import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { CoursesModule } from './courses/courses.module';
import { CategoryModule } from './category/category.module';
import { ChapterModule } from './chapter/chapter.module';
import { CommentModule } from './comment/comment.module';
import { DocLessonModule } from './doc_lesson/doc_lesson.module';
import { EnrollCourseModule } from './enroll_course/enroll_course.module';
import { LessonModule } from './lesson/lesson.module';
import { RolesModule } from './roles/roles.module';
import { TeacherModule } from './teacher/teacher.module';
import { UserClipboardModule } from './user_clipboard/user_clipboard.module';
import { UserRoleModule } from './user_role/user_role.module';
import { UsersModule } from './users/users.module';
import { WishListModule } from './wish_list/wish_list.module';
import * as dotenv from 'dotenv';
import { Course } from './courses/entities/course.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { Category } from './category/entities/category.entity';
import { Chapter } from './chapter/entities/chapter.entity';
import { WishList } from './wish_list/entities/wish_list.entity';
import { EnrollCourse } from './enroll_course/entities/enroll_course.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Course,Teacher,Category,Chapter,WishList,EnrollCourse],
    }),
    BlogModule,
    CoursesModule,
    CategoryModule,
    ChapterModule,
    CommentModule,
    DocLessonModule,
    EnrollCourseModule,
    LessonModule,
    RolesModule,
    TeacherModule,
    UserClipboardModule,
    UserRoleModule,
    UsersModule,
    WishListModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
