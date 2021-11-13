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
import { UserAssesments } from '.';
import { AnswerOptions } from './answer-options.entity';

@Table({
  tableName: 'user_assesment_answers',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_assesment_answers_search_fields',
      fields: ['user_assesment_id'],
    },
    {
      using: 'BTREE',
      name: 'user_assesment_answers_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserAssesmentAnswers extends Model<UserAssesmentAnswers> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => UserAssesments)
  @Column({
    type: DataType.INTEGER,
    field: 'user_assesment_id',
  })
  userAssesmentId: number;

  @ForeignKey(() => AnswerOptions)
  @Column({
    type: DataType.INTEGER,
    field: 'answer_option_id',
  })
  answerOptionId: number;

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

  @BelongsTo(() => UserAssesments)
  userAssesments: UserAssesments;

  @BelongsTo(() => AnswerOptions)
  answerOptions: AnswerOptions;
}
