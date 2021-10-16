import { Op, Sequelize } from 'sequelize';
// Table Structure
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Quizzes } from '.';
import { UserQuizAnswers } from './user-quiz-answers.entity';

@Table({
  tableName: 'quiz_answer_options',
  indexes: [
    {
      using: 'BTREE',
      name: 'quiz_answer_options_search_fields',
      fields: ['quiz_id', 'answer_text'],
    },
    {
      using: 'BTREE',
      name: 'quiz_answer_options_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class QuizAnswerOptions extends Model<QuizAnswerOptions> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Quizzes)
  @Column({
    type: DataType.INTEGER,
    field: 'quiz_id',
  })
  quizId: number;

  @Column({
    type: DataType.STRING,
    field: 'answer_text',
  })
  answerText: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'correction_type',
  })
  correction_type: boolean;

  @Column({
    type: DataType.INTEGER,
    field: 'marks',
  })
  marks: number;

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

  @BelongsTo(() => Quizzes)
  quizzes: Quizzes;

  @HasOne(() => UserQuizAnswers)
  userQuizAnswers: UserQuizAnswers;
}
