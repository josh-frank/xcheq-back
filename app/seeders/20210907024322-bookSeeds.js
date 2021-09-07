'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( "Books", [
      { name: "Josh's personal checkbook", currency: "USD", userId: 1, createdAt: new Date(), updatedAt: new Date() },
   ] );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete( "Books", null, {} );
  }
};
