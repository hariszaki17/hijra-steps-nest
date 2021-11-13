/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'users';
/** Dummy Data */
const dataUsers = [
  {
    username: 'Laksamana Siganteng Adhito',
    password: 'Gantengbangetsolehciat',
    email: 'Lzgantengbanget@gmail.com',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataUsers.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataUsers);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
