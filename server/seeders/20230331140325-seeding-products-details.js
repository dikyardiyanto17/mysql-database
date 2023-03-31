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
    const data = [{ProductId: 1, range: 5, price: 5000, createdAt: new Date(), updatedAt: new Date()}, {ProductId: 1, range: 10, price: 4500,createdAt: new Date(), updatedAt: new Date()}, {ProductId: 1, range: 50, price: 4000,createdAt: new Date(), updatedAt: new Date()}, {ProductId: 2, range: 20, price: 8000,createdAt: new Date(), updatedAt: new Date()}, {ProductId: 2, range: 100, price: 6500,createdAt: new Date(), updatedAt: new Date()}]
    await queryInterface.bulkInsert("productdetails", data)

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("productdetails", null, {truncate: true, cascade: true, restartIdentity: true})
  }
};
