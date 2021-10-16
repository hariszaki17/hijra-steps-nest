import { Op, Sequelize } from 'sequelize';
// Table Structure
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserLearningJourney } from './user-learning-journey.entity';

@Table({
  tableName: 'curriculum_levels',
  indexes: [
    {
      using: 'BTREE',
      name: 'curriculum_levels_search_fields',
      fields: ['name'],
    },
    {
      using: 'BTREE',
      name: 'curriculum_levels_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class CurriculumLevels extends Model<CurriculumLevels> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  name: string;

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

  @HasOne(() => UserLearningJourney)
  userLearningJourney: UserLearningJourney;
}
