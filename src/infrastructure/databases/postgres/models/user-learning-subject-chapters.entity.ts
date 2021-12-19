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
import { Chapters, UserLearningSubjects } from '.';
import { UserLearningSubjectChapterTopics } from './user-learning-subject-chapter-topics.entity';

@Table({
  tableName: 'user_learning_subject_chapters',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_learning_subject_chapters_search_fields',
      fields: ['user_learning_subject_id'],
    },
    {
      using: 'BTREE',
      name: 'user_learning_subject_chapters_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserLearningSubjectChapters extends Model<UserLearningSubjectChapters> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => UserLearningSubjects)
  @Column({
    type: DataType.INTEGER,
    field: 'user_learning_subject_id',
  })
  userLearningSubjectId: number;

  @ForeignKey(() => Chapters)
  @Column({
    type: DataType.INTEGER,
    field: 'chapter_id',
  })
  chapterId: number;

  @Column({
    type: DataType.STRING,
    field: 'status',
  })
  status: string;

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

  @BelongsTo(() => UserLearningSubjects)
  userLearningSubjects: UserLearningSubjects;

  @BelongsTo(() => Chapters)
  chapters: Chapters;

  @HasMany(() => UserLearningSubjectChapterTopics)
  userLearningSubjectChapterTopics: UserLearningSubjectChapterTopics[];
}
