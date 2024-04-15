import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBlogDto {
    @IsNotEmpty()
    create_by: null;

    @IsString()
    @IsNotEmpty()
    create_date: Date;

    @IsNotEmpty()
    modify_by: null;

    @IsString()
    @IsNotEmpty()
    modify_date: Date;

    @IsNumber()
    @IsNotEmpty()
    voided:number;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    @IsNumber()
    likes: number;

    @IsNotEmpty()
    tags: null;

    @IsNotEmpty()
    @IsString()
    title: string;
}
