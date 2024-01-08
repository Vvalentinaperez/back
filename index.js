const express = require("express");
const server = express();

const admin = require("firebase-admin");
const serviceAccount = require("../back/firebase-admin-credentials/fv-showroom-firebase-adminsdk-z4ssx-abdf682efb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Otras configuraciones si es necesario
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server listening at  3001`);
});
