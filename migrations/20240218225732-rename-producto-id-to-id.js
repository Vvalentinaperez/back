"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Productos", "producto_id", "id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Productos", "id", "producto_id");
  },
};
