'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    display_name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      uniqueKey: true,
    },
    password: Sequelize.STRING,
    image: Sequelize.STRING,
  });
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
