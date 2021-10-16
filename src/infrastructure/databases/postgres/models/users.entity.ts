import { Op, Sequelize } from 'sequelize';
// Table Structure
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserDetails } from './user-details.entity';
import { UserQuizzes } from './user-quizzes.entity';

@Table({
  tableName: 'users',
  indexes: [
    {
      using: 'BTREE',
      name: 'users_search_fields',
      fields: ['username'],
    },
    {
      using: 'BTREE',
      name: 'users_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Users extends Model<Users> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    field: 'username',
  })
  username: string;

  @Column({
    type: DataType.STRING,
    field: 'password',
  })
  password: string;

  // Override Sequelize Annotations createdAt, updatedAt and deletedAt
  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('NOW'),
    field: 'created_at',
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('NOW'),
    field: 'updated_at',
  })
  updatedAt: Date;

  @DeletedAt
  @Column({
    field: 'deleted_at',
  })
  deletedAt: Date;

  paranoid: true;

  @HasOne(() => UserDetails)
  userDetails: UserDetails;

  @HasMany(() => UserQuizzes)
  userQuizzes: UserQuizzes;
}
