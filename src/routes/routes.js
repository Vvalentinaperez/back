const express = require("express");
const multer = require("multer"); // middleware para manejar archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();

// Ruta para subir una imagen
router.post("/subir-imagen", upload.single("imagen"), async (req, res) => {
  try {
    const file = req.file;
    const bucket = storage.bucket("tu-storage-bucket.appspot.com");
    const fileName = `imagenes/${file.originalname}`;

    await bucket.upload(file.buffer, {
      destination: fileName,
      contentType: file.mimetype,
    });

    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(fileName)}?alt=media`;

    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al subir la imagen" });
  }
});

module.exports = router;
