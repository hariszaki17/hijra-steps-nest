// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { env = {} } = process;
const {
    POSTGRE_DIALECT: dialect = 'postgres',
    NODE_ENV: nodeEnv = 'development',
} = env;

module.exports = {
    [nodeEnv]: {
        dialect,
        url: `${env.DB_DIALECT}://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
    },
};
