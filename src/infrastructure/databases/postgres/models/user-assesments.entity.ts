import { Op, Sequelize } from 'sequelize';
// Table Structure
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserAssesmentAnswers, Users } from '.';
import { Assesments } from './assesments.entity';

@Table({
  tableName: 'user_assesments',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_assesments_search_fields',
      fields: ['assesment_id'],
    },
    {
      using: 'BTREE',
      name: 'user_assesments_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserAssesments extends Model<UserAssesments> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Assesments)
  @Column({
    type: DataType.INTEGER,
    field: 'assesment_id',
  })
  assesmentId: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    field: 'score',
  })
  score: number;

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

  @BelongsTo(() => Users)
  users: Users;

  @BelongsTo(() => Assesments)
  assesments: Assesments;

  @HasMany(() => UserAssesmentAnswers)
  userAssesmentAnswers: UserAssesmentAnswers;
}
