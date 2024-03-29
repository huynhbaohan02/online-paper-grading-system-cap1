"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Assignments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      assignment_name: {
        type: Sequelize.STRING,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      deadline: {
        type: Sequelize.DATE,
      },
      of_class: {
        type: Sequelize.INTEGER,
      },
      content_text: {
        type: Sequelize.TEXT,
      },
      file_path: {
        type: Sequelize.STRING,
      },
      filename: {
        type: Sequelize.STRING,
      },
      id_teacher: {
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
    await queryInterface.dropTable("Assignments");
  },
};