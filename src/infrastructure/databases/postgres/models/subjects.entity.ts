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
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Assesments } from './assesments.entity';
import { Chapters } from './chapters.entity';
import { CurriculumLevels } from './curriculum-levels.entity';
import { UserLearningSubjects } from './user-learning-subjects.entity';

@Table({
  tableName: 'subjects',
  indexes: [
    {
      using: 'BTREE',
      name: 'subjects_search_fields',
      fields: ['title'],
    },
    {
      using: 'BTREE',
      name: 'subjects_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Subjects extends Model<Subjects> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => CurriculumLevels)
  @Column({
    type: DataType.INTEGER,
    field: 'curriculum_level_id',
  })
  curriculumLevelId: number;

  @Column({
    type: DataType.STRING,
    field: 'title',
  })
  title: string;

  @Column({
    type: DataType.STRING,
    field: 'subject_author',
  })
  subjectAuthor: string;

  @Column({
    type: DataType.INTEGER,
    field: 'sequence',
  })
  sequence: number;

  @Column({
    type: DataType.STRING,
    field: 'description',
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_mandatory',
  })
  isMandatory: boolean;

  @Column({
    type: DataType.STRING,
    field: 'image_url',
  })
  imageUrl: string;

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

  @BelongsTo(() => CurriculumLevels)
  curriculumLevels: CurriculumLevels;

  @HasOne(() => UserLearningSubjects)
  userLearningSubjects: UserLearningSubjects;

  @HasMany(() => Assesments)
  assesments: Assesments;

  @HasMany(() => Chapters)
  chapters: Chapters[];
}
