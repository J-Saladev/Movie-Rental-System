/* A model for the movies table. */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  title: {
      type: DataTypes.STRING
  },
  director: {
      type: DataTypes.STRING
  },
  actors: {
      type: DataTypes.STRING
  },
  genres: {
      type: DataTypes.STRING
  },
  premiere: {
      type: DataTypes.DATE
  },
  availability: {
      type: DataTypes.BOOLEAN
  }
  
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};