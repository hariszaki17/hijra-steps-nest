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
import { Exams, Users } from '.';
import { UserExamAnswers } from './user-exam-answers.entity';

@Table({
  tableName: 'user_exams',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_exams_search_fields',
      fields: ['exam_id'],
    },
    {
      using: 'BTREE',
      name: 'user_exams_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserExams extends Model<UserExams> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Exams)
  @Column({
    type: DataType.INTEGER,
    field: 'exam_id',
  })
  examId: number;

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

  @HasMany(() => UserExamAnswers)
  userExamAnswers: UserExamAnswers;
}
