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
import { Subjects, UserLearningJourney } from '.';
import { UserLearningSubjectChapters } from './user-learning-subject-chapters.entity';

@Table({
  tableName: 'user_learning_subjects',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_learning_subjects_search_fields',
      fields: ['user_learning_journey_id'],
    },
    {
      using: 'BTREE',
      name: 'user_learning_subjects_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserLearningSubjects extends Model<UserLearningSubjects> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => UserLearningJourney)
  @Column({
    type: DataType.INTEGER,
    field: 'user_learning_journey_id',
  })
  userLearningJourneyId: number;

  @ForeignKey(() => Subjects)
  @Column({
    type: DataType.INTEGER,
    field: 'subject_id',
  })
  subjectId: number;

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

  @BelongsTo(() => UserLearningJourney)
  userLearningJourney: UserLearningJourney;

  @BelongsTo(() => Subjects)
  subjects: Subjects;

  @HasMany(() => UserLearningSubjectChapters)
  userLearningSubjectChapters: UserLearningSubjectChapters[];
}
