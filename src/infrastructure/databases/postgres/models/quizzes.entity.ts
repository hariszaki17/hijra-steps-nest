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
import { Topics } from '.';
import { UserQuizzes } from './user-quizzes.entity';

@Table({
  tableName: 'quizzes',
  indexes: [
    {
      using: 'BTREE',
      name: 'quizzes_search_fields',
      fields: ['question'],
    },
    {
      using: 'BTREE',
      name: 'quizzes_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Quizzes extends Model<Quizzes> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Topics)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId: number;

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

  @BelongsTo(() => Topics)
  topics: Topics;

  @HasMany(() => UserQuizzes)
  userQuizzes: UserQuizzes;
}
