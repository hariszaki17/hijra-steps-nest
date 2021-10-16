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
import { Exams, UserExamAnswers } from '.';

@Table({
  tableName: 'exam_answer_options',
  indexes: [
    {
      using: 'BTREE',
      name: 'exam_answer_options_search_fields',
      fields: ['answer_text'],
    },
    {
      using: 'BTREE',
      name: 'exam_answer_options_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class ExamAnswerOptions extends Model<ExamAnswerOptions> {
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

  @Column({
    type: DataType.STRING,
    field: 'answer_text',
  })
  answerText: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'correction_type',
  })
  correctionType: boolean;

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

  @BelongsTo(() => Exams)
  exams: Exams;

  @HasOne(() => UserExamAnswers)
  userExamAnswers: UserExamAnswers;
}
