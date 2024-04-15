import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EnrollCourse {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number

    @Column()
    course_id:number

    @Column()
    user_id:number
}
