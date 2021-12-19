/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'user_learning_subject_chapters';
/** Dummy Data */
const dataUserLearningSubjectChapters = [
  {
    user_learning_subject_id: 1,
    chapter_id: 1,
    status: 'on_progress',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataUserLearningSubjectChapters.length > 0) {
      await queryInterface.bulkInsert(
        `${tableName}`,
        dataUserLearningSubjectChapters,
      );
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
