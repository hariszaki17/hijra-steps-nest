/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'chapters';
/** Dummy Data */
const dataChapters = [
  {
    subject_id: 1,
    title: 'Empat perkara yang wajib dipelajari',
    is_bonus_content: false,
    is_mandatory: true,
    sequence: 1,
  },
  {
    subject_id: 1,
    title: 'Tiga ilmu yang harus diamalkan',
    is_bonus_content: false,
    is_mandatory: true,
    sequence: 2,
  },
  {
    subject_id: 1,
    title: 'Tiga ilmu yang harus diamalkan 2',
    is_bonus_content: false,
    is_mandatory: true,
    sequence: 1,
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataChapters.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataChapters);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
