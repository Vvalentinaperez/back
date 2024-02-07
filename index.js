const express = require("express");
const server = express();
const { conn } = require("./src/db.js");
const PORT = 3001;

conn.sync({ alter: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at  3001`);
  });
});
