"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Teachers", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "GV",
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.INTEGER(11),
      },
      address: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      filename: {
        type: Sequelize.STRING,
      },
      refresh_token: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Teachers");
  },
};
