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
import { Topics, UserLearningSubjectChapters } from '.';

@Table({
  tableName: 'user_learning_subject_chapter_topics',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_learning_subject_chapter_topics_search_fields',
      fields: ['user_learning_subject_chapter_id'],
    },
    {
      using: 'BTREE',
      name: 'user_learning_subject_chapter_topics_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserLearningSubjectChapterTopics extends Model<UserLearningSubjectChapterTopics> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => UserLearningSubjectChapters)
  @Column({
    type: DataType.INTEGER,
    field: 'user_learning_subject_chapter_id',
  })
  userLearningSubjectChapterId: number;

  @ForeignKey(() => Topics)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId: number;

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

  @BelongsTo(() => UserLearningSubjectChapters)
  userLearningSubjectChapters: UserLearningSubjectChapters;

  @BelongsTo(() => Topics)
  topics: Topics;
}
