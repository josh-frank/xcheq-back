'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( models ) {
      Book.belongsTo( models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      } );
    }
  };
  Book.init({
    name: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};