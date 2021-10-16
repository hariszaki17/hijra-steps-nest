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
import { Chapters } from './chapters.entity';
import { CurriculumLevels } from './curriculum-levels.entity';
import { Exams } from './exams.entity';
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
    type: DataType.STRING,
    field: 'mandatory_type',
  })
  mandatoryType: string;

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

  @HasMany(() => Exams)
  exams: Exams;

  @HasMany(() => Chapters)
  chapters: Chapters;
}
