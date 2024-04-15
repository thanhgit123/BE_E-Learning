import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({type:'varchar', length: 255})
    create_by: string

    @Column({type:'date'})
    create_date: Date

    @Column({type:'varchar', length: 255})
    modify_by: string

    @Column({type:'date'})
    modify_date:Date

    @Column({type:'bit'})
    voided:number

    @Column()
    course_id:number
}
