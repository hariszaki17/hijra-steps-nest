import { Injectable } from '@nestjs/common';
import { CountOptions, WhereOptions } from 'sequelize';
import { FindOptions, Transaction } from 'sequelize/types';

// General Method for call repository using by many use case
@Injectable()
export class BaseService {
  public entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  public async findAll(
    query?: FindOptions,
    transaction?: Transaction,
  ): Promise<any[]> {
    return this.entity.findAll({ ...query, transaction });
  }

  public async findWithQuery(
    query: FindOptions,
    transaction?: Transaction,
  ): Promise<any[]> {
    return this.entity.findAndCountAll({
      ...query,
      transaction,
    });
  }

  /**
   * This method is for count rows + paginate with group by operations
   * @param groupByField String
   * @param query Find Options Sequelize
   * @param transaction Transaction Sequelize
   */
  public async findGroupWithQuery(
    groupByField: string,
    query: FindOptions,
    transaction?: Transaction,
    countQuery?: WhereOptions,
  ): Promise<any> {
    const count = await this.entity.count({
      distinct: true,
      col: groupByField,
      ...countQuery,
    });

    const rows = await this.entity.findAll({ ...query, transaction });

    return { count, rows };
  }

  public async count(
    query: FindOptions & CountOptions,
    transaction?: Transaction,
  ): Promise<number> {
    return this.entity.count({
      ...query,
      transaction,
    });
  }

  public async findOne(id: number, transaction?: Transaction): Promise<any> {
    return this.entity.findOne({
      where: { id },
      transaction,
    });
  }

  public async create(data: any, transaction?: Transaction): Promise<any> {
    return this.entity.create(data, { transaction });
  }

  public async patch(
    id: number,
    data: any,
    transaction?: Transaction,
  ): Promise<any> {
    const [numberOfAffectedRows, [updatedPost]] = await this.entity.update(
      { ...data },
      { where: { id }, transaction, returning: true },
    );
    return { numberOfAffectedRows, updatedPost };
  }

  public async delete(id: number, transaction?: Transaction): Promise<number> {
    return this.entity.destroy({ where: { id } }, { transaction });
  }
}
