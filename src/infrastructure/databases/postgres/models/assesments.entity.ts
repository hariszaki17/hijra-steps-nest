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
import { Chapters, Subjects } from '.';

@Table({
  tableName: 'assesments',
  indexes: [
    {
      using: 'BTREE',
      name: 'assesments_search_fields',
      fields: ['subject_id', 'chapter_id'],
    },
    {
      using: 'BTREE',
      name: 'assesments_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Assesments extends Model<Assesments> {
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
    field: 'pass_score',
  })
  passScore: string;

  @Column({
    type: DataType.STRING,
    field: 'type',
  })
  type: string;

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
}
