const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Carrito", {
    carrito_id: {
      type: DataTypes.UUID,
      defailtValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
  {
    timestamps: true;
  }
};
