'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Noticia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      noticia: {
        type: Sequelize.TEXT
      },
      datanoticia: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      foto: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Noticia');
  }
};