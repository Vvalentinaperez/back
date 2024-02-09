// const fs = require("fs");
// const { Producto } = require("../models/Producto");
// // const rutaRopa = "../utils/json/ropa.json";
// // const rutaAccesorios = "../utils/json/accesorios.json";
// // const rutaMarroquineria = "../utils/json/marroquineria.json"; // Ruta como cadena de texto

// const productosRopa = JSON.parse(
//   fs.readFileSync("../utils/json/ropa.json", "utf8")
// );
// const productosAccesorios = JSON.parse(
//   fs.readFileSync("../utils/json/accesorios.json", "utf8")
// );
// const productosMarroquineria = JSON.parse(
//   fs.readFileSync("../utils/json/marroquineria.json", "utf8")
// );

// const insertarProductosEnDB = async () => {
//   try {
//     await Producto.bulkCreate(productosRopa);
//     console.log("Productos de ropa creados correctamente");

//     await Producto.bulkCreate(productosAccesorios);
//     console.log("Productos de accesorios creados correctamente");

//     await Producto.bulkCreate(productosMarroquineria);
//     console.log("Productos de marroquineria creados correctamente");

//     console.log("Todos los datos insertados correctamente en la base de datos");
//   } catch (error) {
//     console.error("Error al insertar datos: ", error);
//   }
// };

// insertarProductosEnDB();
