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
import { ExamAnswerOptions } from './exam-answer-options.entity';
import { UserExams } from './user-exams.entity';

@Table({
  tableName: 'user_exam_answers',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_exam_answers_search_fields',
      fields: ['user_exam_id'],
    },
    {
      using: 'BTREE',
      name: 'user_exam_answers_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserExamAnswers extends Model<UserExamAnswers> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => UserExams)
  @Column({
    type: DataType.INTEGER,
    field: 'user_exam_id',
  })
  userExamId: number;

  @ForeignKey(() => ExamAnswerOptions)
  @Column({
    type: DataType.INTEGER,
    field: 'exam_answer_option_id',
  })
  examAnswerOptionId: number;

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

  @BelongsTo(() => UserExams)
  userExams: UserExams;

  @BelongsTo(() => ExamAnswerOptions)
  examAnswerOptions: ExamAnswerOptions;
}
