import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chapter {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column({type:'varchar', length: 255})
    create_by: string

    @Column({type:'date'})
    create_date: Date

    @Column({type:'varchar', length: 255})
    modify_by: string

    @Column({type:'date'})
    modify_date:Date

    @Column({type:'text'})
    description:string

    @Column({type:'varchar', length: 255})
    title:string
    
    @Column({type:'bit'})
    voided:number

    @Column({type:'bigint'})
    course_id:number
}
