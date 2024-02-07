const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Favorito", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.UUID,
    },
  });
  {
    timestamps: true;
  }
};
