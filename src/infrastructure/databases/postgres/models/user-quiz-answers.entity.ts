import { Op, Sequelize } from 'sequelize';
// Table Structure
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { QuizAnswerOptions, Quizzes, UserQuizzes } from '.';

@Table({
  tableName: 'user_quiz_answers',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_quiz_answers_search_fields',
      fields: ['user_quiz_id'],
    },
    {
      using: 'BTREE',
      name: 'user_quiz_answers_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserQuizAnswers extends Model<UserQuizAnswers> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => QuizAnswerOptions)
  @Column({
    type: DataType.INTEGER,
    field: 'quiz_answer_option_id',
  })
  quizAnswerOptionId: number;

  @ForeignKey(() => UserQuizzes)
  @Column({
    type: DataType.INTEGER,
    field: 'user_quiz_id',
  })
  userQuizId: number;

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

  @BelongsTo(() => QuizAnswerOptions)
  quizAnswerOptions: QuizAnswerOptions;

  @BelongsTo(() => UserQuizzes)
  userQuizzes: UserQuizzes;
}
