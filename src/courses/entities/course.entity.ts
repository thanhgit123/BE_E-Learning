import { join } from "path";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @Column({type:"varchar", length:255})
    create_by:null

    @Column({type:'date'})
    create_date:Date

    @Column({type:'varchar', length:255})
    modify_by:null

    @Column({type:'date'})
    modify_date:Date

    @Column({type:'varchar', length:255})
    image:string

    @Column({type:'varchar', length:255})
    title:string

    @Column({type:'bit'})
    voided:number

    @Column({type:'varchar', length:255})
    sub_description:string

    @Column({type:'longtext'})
    description:string

    @ManyToOne(() => Teacher, (teacher) => teacher.course)
    @JoinColumn({name:'teacher_id'})
    teacher: Teacher

}
