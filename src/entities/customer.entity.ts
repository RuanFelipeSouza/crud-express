import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  celphone: string;
}
