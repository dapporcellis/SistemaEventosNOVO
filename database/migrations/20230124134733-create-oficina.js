'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Oficinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      carga: {
        type: Sequelize.INTEGER
      },
      datahora: {
        type: Sequelize.DATE
      },
      vagas: {
        type: Sequelize.INTEGER
      },
      ordem: {
        type: Sequelize.INTEGER
      },
      eventoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Eventos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Oficinas');
  }
};