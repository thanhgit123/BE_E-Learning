import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  create_by: string;
  @Column()
  create_date: string;

  @Column({ nullable: true })
  modify_date: string;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  is_active: number;

  @Column()
  password: string;

  @Column() 
  phone: number;

  @Column({ nullable: true }) 
  username:string;

  @Column() 
  voided: number;

  @Column({ nullable: true }) 
  active: number;
}