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
import { Users } from '.';
import { CurriculumLevels } from './curriculum-levels.entity';
import { UserLearningSubjects } from './user-learning-subjects.entity';

@Table({
  tableName: 'user_learning_journey',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_learning_journey_search_fields',
      fields: ['user_id'],
    },
    {
      using: 'BTREE',
      name: 'user_learning_journey_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserLearningJourney extends Model<UserLearningJourney> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;

  @ForeignKey(() => CurriculumLevels)
  @Column({
    type: DataType.INTEGER,
    field: 'curriculum_level_id',
  })
  curriculumLevelId: number;

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

  @BelongsTo(() => Users)
  users: Users;

  @BelongsTo(() => CurriculumLevels)
  curriculumLevels: CurriculumLevels;

  @HasMany(() => UserLearningSubjects)
  userLearningJourney: UserLearningSubjects;
}
