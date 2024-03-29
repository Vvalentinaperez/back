require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs"); //proporciona una API para trabajar con el sistema de archivos del sistema operativo. Es útil para leer archivos, como archivos JSON en tu caso.
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Usuario, Producto, Carrito, Favorito } = sequelize.models;

Usuario.hasMany(Carrito, { foreignKey: "usuario_id" }); // Un usuario puede tener muchos carritos
Usuario.hasMany(Favorito, { foreignKey: "id" }); // Un usuario puede tener muchos favoritos

Carrito.belongsTo(Usuario, { foreignKey: "usuario_id" }); // Un carrito pertenece a un usuario
Carrito.belongsToMany(Producto, {
  through: "CarritoProductos",
  foreignKey: "carrito_id",
}); // Un carrito puede tener muchos productos

Producto.belongsToMany(Carrito, {
  through: "CarritoProductos",
  foreignKey: "product_id",
}); // Un producto puede estar en muchos carritos
Producto.belongsToMany(Favorito, {
  through: "FavoritosProductos",
  foreignKey: "product_id",
}); // Un producto puede estar en muchos favoritos

Favorito.belongsTo(Usuario, { foreignKey: "id" }); // Un favorito pertenece a un usuario
Favorito.belongsTo(Producto, { foreignKey: "product_id" }); // Un favorito pertenece a un producto

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
