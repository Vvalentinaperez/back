const fs = require("fs");
const { Producto } = require("../db/models/Producto");

const productosRopa = JSON.parse(
  fs.readFileSync("../utils/json/ropa.json", "utf8")
);
const productosAccesorios = JSON.parse(
  fs.readFileSync("../utils/json/accesorios.json", "utf8")
);
const productosMarroquineria = JSON.parse(
  fs.readFileSync("../utils/json/marroquineria.json", "utf8")
);

const insertarProductosEnDB = async () => {
  try {
    await Producto.bulkCreate(productosRopa);
    console.log("Productos de ropa creados correctamente");

    await Producto.bulkCreate(productosAccesorios);
    console.log("Productos de accesorios creados correctamente");

    await Producto.bulkCreate(productosMarroquineria);
    console.log("Productos de marroquineria creados correctamente");

    console.log("Todos los datos insertados correctamente en la base de datos");
  } catch (error) {
    console.error("Error al insertar datos: ", error);
  }
};

insertarProductosEnDB();
