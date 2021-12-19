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
import { BankQuestions } from './bank-questions.entity';

@Table({
  tableName: 'answer_options',
  indexes: [
    {
      using: 'BTREE',
      name: 'answer_options_search_fields',
      fields: ['bank_question_id', 'answer_text'],
    },
    {
      using: 'BTREE',
      name: 'answer_options_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class AnswerOptions extends Model<AnswerOptions> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => BankQuestions)
  @Column({
    type: DataType.INTEGER,
    field: 'bank_question_id',
  })
  bankQuestionId: number;

  @Column({
    type: DataType.STRING,
    field: 'answer_text',
  })
  answerText: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_correct',
  })
  isCorrect: boolean;

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

  @BelongsTo(() => BankQuestions)
  bankQuestions: BankQuestions;
}
