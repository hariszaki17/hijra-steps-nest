/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'user_learning_subjects';
/** Dummy Data */
const dataUserLearningSubjects = [
  {
    user_learning_journey_id: 1,
    subject_id: 1,
    status: 'unlock',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataUserLearningSubjects.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataUserLearningSubjects);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
