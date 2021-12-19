/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'user_learning_subject_chapter_topics';
/** Dummy Data */
const dataUserLearningSubjectChapterTopics = [
  {
    user_learning_subject_chapter_id: 1,
    topic_id: 1,
    status: 'completed',
  },
  {
    user_learning_subject_chapter_id: 1,
    topic_id: 2,
    status: 'on_progress',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataUserLearningSubjectChapterTopics.length > 0) {
      await queryInterface.bulkInsert(
        `${tableName}`,
        dataUserLearningSubjectChapterTopics,
      );
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
