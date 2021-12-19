/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'user_details';
/** Dummy Data */
const dataUserDetails = [
  {
    user_id: 1,
    name: 'Laksamana Adhito',
    dob: new Date('1998-04-26T17:00:00.000Z'),
    subscription_type: 'premium',
    avatar_url:
      'https://drive.google.com/uc?id=1GRb3OOJ0TgEZRRLMkPrNucvHE_XVP77s',
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataUserDetails.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataUserDetails);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
