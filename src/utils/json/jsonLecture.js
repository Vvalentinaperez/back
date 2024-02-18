const fs = require("fs");
const { Producto } = require("../../db");

// Función para insertar productos en la base de datos
const insertarProductosEnDB = async (productos, categoria) => {
  try {
    await Producto.bulkCreate(productos);
    console.log(`Productos de ${categoria} creados correctamente`);
  } catch (error) {
    console.error(`Error al insertar productos de ${categoria}:`, error);
  }
};

// Lectura del archivo de ropa
fs.readFile("back/src/utils/json/ropa.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo de ropa:", err);
    return;
  }
  const productosRopa = JSON.parse(data);
  insertarProductosEnDB(productosRopa, "ropa");
});

// Lectura del archivo de accesorios
fs.readFile("back/src/utils/json/accesorios.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo de accesorios:", err);
    return;
  }
  const productosAccesorios = JSON.parse(data);
  insertarProductosEnDB(productosAccesorios, "accesorios");
});

// Lectura del archivo de marroquineria
fs.readFile("back/src/utils/json/marroquineria.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo de marroquineria:", err);
    return;
  }
  const productosMarroquineria = JSON.parse(data);
  insertarProductosEnDB(productosMarroquineria, "marroquineria");
});

console.log("Inicio de la carga de productos en la base de datos");
