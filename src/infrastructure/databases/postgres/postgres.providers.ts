import { Sequelize } from 'sequelize-typescript';
import {
  postgresDatabase,
  postgresOptionConfig,
  postgresPassword,
  postgresUsername,
} from './postgres.config';
import * as models from './models';

export const postgresProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        postgresDatabase,
        postgresUsername,
        postgresPassword,
        postgresOptionConfig,
      );
      sequelize.addModels(Object.values(models));
      await sequelize.sync();
      return sequelize;
    },
  },
];
