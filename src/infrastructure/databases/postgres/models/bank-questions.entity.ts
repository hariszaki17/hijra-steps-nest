import { Op, Sequelize } from 'sequelize';
// Table Structure
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { AnswerOptions } from './answer-options.entity';

@Table({
  tableName: 'bank_questions',
  indexes: [
    {
      using: 'BTREE',
      name: 'bank_questions_search_fields',
      fields: ['bank_question'],
    },
    {
      using: 'BTREE',
      name: 'bank_questions_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class BankQuestions extends Model<BankQuestions> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    field: 'bank_question',
  })
  bankQuestion: string;

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

  @HasMany(() => AnswerOptions)
  answeOptions: AnswerOptions;
}
