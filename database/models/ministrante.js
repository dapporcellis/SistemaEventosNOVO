'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ministrante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Oficina, {
        through: 'oficinaministrante',
        as: 'oficinas',
        foreignKey: 'ministranteId',
      });
      this.belongsToMany(models.Palestra, {
        through: 'palestraministrante',
        as: 'palestras',
        foreignKey: 'ministranteId',
      });
    }
  }
  Ministrante.init({
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    sobre: DataTypes.STRING,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    twitter: DataTypes.STRING,
    lattes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ministrante',
  });
  return Ministrante;
};