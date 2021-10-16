import { Dialect } from 'sequelize/types';

export interface IPostgresConfig {
  dialect: Dialect;
  host: string;
  port: number;
}
