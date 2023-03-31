'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDetail.belongsTo(models.Product, {onDelete: 'cascade', onUpdate: 'cascade'})
    }
  }
  ProductDetail.init({
    ProductId: DataTypes.INTEGER,
    range: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};