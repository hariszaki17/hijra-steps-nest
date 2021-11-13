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
import { Subjects } from '.';
import { Assesments } from './assesments.entity';
import { Topics } from './topics.entity';

@Table({
  tableName: 'chapters',
  indexes: [
    {
      using: 'BTREE',
      name: 'chapters_search_fields',
      fields: ['subject_id'],
    },
    {
      using: 'BTREE',
      name: 'chapters_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class Chapters extends Model<Chapters> {
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

  @Column({
    type: DataType.STRING,
    field: 'title',
  })
  title: string;

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

  @HasOne(() => Assesments)
  assesments: Assesments;

  @HasMany(() => Topics)
  topics: Topics;
}
