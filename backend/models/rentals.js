'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rentals.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  

  rentaldate: {
      type: DataTypes.DATE
  },
  returndate: {
      type: DataTypes.DATE
  },
  price: {
      type: DataTypes.DOUBLE
  }
  }, {
    sequelize,
    modelName: 'rentals',
  });
  return rentals;
};