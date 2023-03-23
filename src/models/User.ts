import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;
}
