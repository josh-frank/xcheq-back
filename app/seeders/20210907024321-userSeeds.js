'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( "Users", [
      { username: "Josh", email: "josh_frank@icloud.com", createdAt: new Date(), updatedAt: new Date() }
   ] );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete( "Users", null, {} );
  }
};
