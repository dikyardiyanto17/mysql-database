'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const data = [{name: 'Digital A3', createdAt: new Date(), updatedAt: new Date()}, {name: "Indoor", createdAt: new Date(), updatedAt: new Date()}, {name: 'Outdoor', createdAt: new Date(), updatedAt: new Date()}, {name: 'Finishing', createdAt: new Date(), updatedAt: new Date()}]

   await queryInterface.bulkInsert("categories", data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("categories", null, {truncate: true, cascade: true, restartIdentity: true})
  }
};
