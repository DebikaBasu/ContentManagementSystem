'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Templates',
      [
        {
          title: 'Blog Page Template',
          description: 'Create an responsive Blog page with this editable blog page template'
        },
        {
          title: 'Business Portfolio Template',
          description: 'Create an impressive portfolio for your business with this editable template'
        }
      ], 
    {});

  },

  async down(queryInterface, Sequelize) {
   
  }
};
