/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const tableName = 'topics';
/** Dummy Data */
const dataTopics = [
  {
    chapter_id: 1,
    title: 'Ilmu Mengenal Allah, Nabi-Nya, dan Agama-Nya',
    content_type: 'video',
    content_url: 'https://youtu.be/UgzCYvIjHPI',
    topic_author: 'Ustadz Muhammad Fulan',
    material_explanation:
      '<p>Saudaraku,</p> <br/> <p>Semoga Allah senantiasa melimpahkan rahmat-Nya kepada anda. Ketahuilah, bahwa wajib bagi kita untuk mendalami empat masalah, yaitu : Ilmu, ialah mengenal Allah, mengenal Nabi-Nya dan mengenal agama Islam berdasarkan dalil-dalil. Amal, ialah menerapkan ilmu ini. Da’wah, ialah mengajak orang lain kepada ilmu ini. Sabar, ialah tabah dan tangguh menghadapi segala rintangan dalam menuntut ilmu, mengamalkannya dan berda’wah kepadanya. </p> <br/> <p><b>Sumbernya, firman Allah Ta’ala.</b></p> <p dir="rtl">وَالْعَصْرِ﴿١﴾إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ﴿٢﴾إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ “</p> <p>Demi masa. Sesungguhnya setiap manusia benar-benar berada dalam kerugian. Kecuali orang-orang yang beriman, melakukan segala amal shalih dan saling nasihat-menasihati untuk (menegakkan) yang haq, serta nasehat-menasehati untuk (berlaku) sabar“. [al-‘Ashr/103: 1-3].</p>',
    is_bonus_content: false,
  },
];

module.exports = {
  up: async (queryInterface) => {
    const result = await queryInterface.sequelize.query(
      `SELECT * FROM ${tableName} limit 1;`,
      { raw: true, type: 'SELECT' },
    );
    if (result.length < 1 && dataTopics.length > 0) {
      await queryInterface.bulkInsert(`${tableName}`, dataTopics);
    }
  },

  down: async (queryInterface) =>
    queryInterface.bulkDelete(`${tableName}`, null, {}),
};
