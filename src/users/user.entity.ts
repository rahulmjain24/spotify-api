import BaseEntityModel from 'src/library/BaseEntityModel';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'tbl_users' })
export class User extends BaseEntityModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
