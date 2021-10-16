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
import { Quizzes, Users } from '.';
import { UserQuizAnswers } from './user-quiz-answers.entity';

@Table({
  tableName: 'user_quizzes',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_quizzes_search_fields',
      fields: ['quiz_id', 'user_id'],
    },
    {
      using: 'BTREE',
      name: 'user_quizzes_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserQuizzes extends Model<UserQuizzes> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;

  @ForeignKey(() => Quizzes)
  @Column({
    type: DataType.INTEGER,
    field: 'quiz_id',
  })
  quizId: number;

  @Column({
    type: DataType.INTEGER,
    field: 'score',
  })
  score: number;

  @Column({
    type: DataType.STRING,
    field: 'question',
  })
  question: string;

  @Column({
    type: DataType.STRING,
    field: 'correct_answer_explanation',
  })
  correctAnswerExplanation: string;

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

  @BelongsTo(() => Quizzes)
  quizzes: Quizzes;

  @HasMany(() => UserQuizAnswers)
  userQuizAnswers: UserQuizAnswers;
}
