/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'subjects';
/** Dummy Data */
const dataSubjects = [
  {
    curriculum_level_id: 1,
    title: 'Apa itu agama islam?',
    subject_author: 'Ustadz Muhammad Fulan',
    sequence: 1,
    description: '',
    mandatory_type: ''
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataSubjects.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataSubjects);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
