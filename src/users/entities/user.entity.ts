import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  password: string;

  @Column({ type: 'varchar', length: 11 })
  phone: string;

  @CreateDateColumn({ type: 'datetime' })
  created_At: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_At: Date;
}
