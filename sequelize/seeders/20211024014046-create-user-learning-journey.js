/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'user_learning_journey';
/** Dummy Data */
const dataUserLearningJourney = [
  {
    user_id: 1,
    curriculum_level_id: 1,
    status: 'unlock',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataUserLearningJourney.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataUserLearningJourney);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
