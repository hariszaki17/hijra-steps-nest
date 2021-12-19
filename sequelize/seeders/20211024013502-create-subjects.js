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
    is_mandatory: true,
    image_url:
      'https://drive.google.com/uc?id=1dEsNPVXAmjlQl9QKeieNL_0CMN7oT3Kd',
  },
  {
    curriculum_level_id: 1,
    title: 'Tuhan Yang Maha Esa',
    subject_author: 'Ustadz Muhammad Fulan L.C.',
    sequence: 2,
    description: '',
    is_mandatory: true,
    image_url:
      'https://drive.google.com/uc?id=1eyk8OYZlUnUzIglhm-q0t5G6ljQI_W04',
  },
  {
    curriculum_level_id: 2,
    title: 'Manusia Sebagai Hamba',
    subject_author: 'Ustadz Muhammad Fulan L.C.',
    sequence: 1,
    description: '',
    is_mandatory: true,
    image_url:
      'https://drive.google.com/uc?id=1eAwd2r8lIWzb8T9nk8awpctA55_v8WK-',
  },
  {
    curriculum_level_id: 2,
    title: 'Shalat Tiang Agama',
    subject_author: 'Ustadz Muhammad Fulan L.C.',
    sequence: 2,
    description: '',
    is_mandatory: true,
    image_url:
      'https://drive.google.com/uc?id=1GOu4GmpUeLgryCe-WHJFHEXCP0ujpOad',
  },
  {
    curriculum_level_id: 2,
    title: 'Thaharah',
    subject_author: 'Ustadz Muhammad Fulan L.C.',
    sequence: 3,
    description: '',
    is_mandatory: true,
    image_url:
      'https://drive.google.com/uc?id=1L5R6FdQqcGDkJvsQ7a82EQAoz9bzQ510',
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
