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
import { Assesments } from './assesments.entity';
import { BankQuestions } from './bank-questions.entity';
@Table({
  tableName: 'assesment_questions',
  indexes: [
    {
      using: 'BTREE',
      name: 'assesment_questions_search_fields',
      fields: ['assesment_id'],
    },
    {
      using: 'BTREE',
      name: 'assesment_questions_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class AssesmentQuestions extends Model<AssesmentQuestions> {
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

  @ForeignKey(() => BankQuestions)
  @Column({
    type: DataType.INTEGER,
    field: 'bank_question_id',
  })
  bankQuestionId: number;

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

  @BelongsTo(() => Assesments)
  assesments: Assesments;

  @BelongsTo(() => BankQuestions)
  bankQuestions: BankQuestions;
}
