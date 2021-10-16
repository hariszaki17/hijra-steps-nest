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
import { Subjects } from '.';
import { Chapters } from './chapters.entity';
import { ExamAnswerOptions } from './exam-answer-options.entity';

@Table({
  tableName: 'exams',
  indexes: [
    {
      using: 'BTREE',
      name: 'exams_search_fields',
      fields: ['question'],
    },
    {
      using: 'BTREE',
      name: 'exams_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Exams extends Model<Exams> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Subjects)
  @Column({
    type: DataType.INTEGER,
    field: 'subject_id',
  })
  subjectId: number;

  @ForeignKey(() => Chapters)
  @Column({
    type: DataType.INTEGER,
    field: 'chapter_id',
  })
  chapterId: number;

  @Column({
    type: DataType.STRING,
    field: 'question',
  })
  question: string;

  @Column({
    type: DataType.INTEGER,
    field: 'pass_score',
  })
  passScore: number;

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

  @BelongsTo(() => Subjects)
  subjects: Subjects;

  @BelongsTo(() => Chapters)
  chapters: Chapters;

  @HasMany(() => ExamAnswerOptions)
  examAnswerOptions: ExamAnswerOptions;
}
