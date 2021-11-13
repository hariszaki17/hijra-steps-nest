/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'answer_options';
/** Dummy Data */
const dataAnswerOptions = [
  {
    bank_question_id: 1,
    answer_text: 'Allah Ar-Rahman',
    is_correct: true,
    correct_answer_explanation: 'sample text',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataAnswerOptions.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataAnswerOptions);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
