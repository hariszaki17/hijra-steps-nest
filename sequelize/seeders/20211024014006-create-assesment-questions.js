/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'assesment_questions';
/** Dummy Data */
const dataAssesmentQuestions = [
  {
    assesment_id: 1,
    bank_question_id: 1,
    marks: 100,
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataAssesmentQuestions.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataAssesmentQuestions);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
