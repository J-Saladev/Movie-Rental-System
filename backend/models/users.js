'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  name: {
      type: DataTypes.STRING
  },
  address: {
      type: DataTypes.STRING
  },
  telephone: {
      type: DataTypes.STRING
  },
  email: {
      type: DataTypes.STRING
  },
  zipcode: {
      type: DataTypes.STRING
  }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};