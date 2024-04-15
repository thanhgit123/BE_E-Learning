import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  create_by: null;

  @IsString()
  @IsEmpty()
  create_date: Date;

  @IsNotEmpty()
  modify_by: null;

  @IsString()
  @IsNotEmpty()
  modify_date: Date;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  voided: number;

  @IsNotEmpty()
  @IsNumber()   
  teacher_id: number
}
