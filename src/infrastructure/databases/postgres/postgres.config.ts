import { IPostgresConfig } from './types/postgres.types';
import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

dotenv.config();

export const postgresOptionConfig: IPostgresConfig = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
};

export const postgresDatabase: string = process.env.DB_NAME;
export const postgresUsername: string = process.env.DB_USERNAME;
export const postgresPassword: string = process.env.DB_PASSWORD;
