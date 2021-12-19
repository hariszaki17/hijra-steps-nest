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
import { Users } from '.';

@Table({
  tableName: 'user_details',
  indexes: [
    {
      using: 'BTREE',
      name: 'user_details_search_fields',
      fields: ['user_id'],
    },
    {
      using: 'BTREE',
      name: 'user_details_deleted_at_fields',
      fields: ['deleted_at'],
      where: {
        deleted_at: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
export class UserDetails extends Model<UserDetails> {
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

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  name: string;

  @Column({
    type: DataType.DATE,
    field: 'dob',
  })
  dob: Date;

  @Column({
    type: DataType.STRING,
    field: 'subscription_type',
  })
  subscriptionType: string;

  @Column({
    type: DataType.STRING,
    field: 'avatar_url',
  })
  avatar_url: string;

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
}
