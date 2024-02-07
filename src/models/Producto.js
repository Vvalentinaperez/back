const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Producto", {
    producto_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    offer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  {
    timestamps: true;
  }
};
