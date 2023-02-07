'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oficina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Evento, {
        foreignKey: 'eventoId',
        as: 'evento'
      })
      this.belongsToMany(models.Ministrante, {
        through: 'oficinaministrante',
        as: 'ministrantes',
        foreignKey: 'oficinaId',
      });
    }
  }
  Oficina.init({
    nome: DataTypes.STRING,
    carga: DataTypes.NUMBER,
    datahora: DataTypes.DATE,
    vagas: DataTypes.INTEGER,
    ordem: DataTypes.INTEGER,
    eventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Oficina',
  });
  return Oficina;
};