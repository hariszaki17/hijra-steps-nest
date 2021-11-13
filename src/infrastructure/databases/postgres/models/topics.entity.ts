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
import { Chapters } from '.';

@Table({
  tableName: 'topics',
  indexes: [
    {
      using: 'BTREE',
      name: 'topics_search_fields',
      fields: ['title'],
    },
    {
      using: 'BTREE',
      name: 'topics_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Topics extends Model<Topics> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Chapters)
  @Column({
    type: DataType.INTEGER,
    field: 'chapter_id',
  })
  chapterId: number;

  @Column({
    type: DataType.STRING,
    field: 'title',
  })
  title: string;

  @Column({
    type: DataType.STRING,
    field: 'content_type',
  })
  contentType: string;

  @Column({
    type: DataType.STRING,
    field: 'content_url',
  })
  contentUrl: string;

  @Column({
    type: DataType.STRING,
    field: 'topic_author',
  })
  topicAuthor: string;

  @Column({
    type: DataType.TEXT,
    field: 'material_explanation',
  })
  materialExplanation: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_bonus_content',
  })
  isBonusContent: boolean;

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

  @BelongsTo(() => Chapters)
  chapters: Chapters;
}
