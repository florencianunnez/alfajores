// Importamos mongoose, la librería para manejar MongoDB con Node.js
const mongoose = require('mongoose');

// Definimos el esquema del alfajor (estructura de los documentos)
const AlfajorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precioUnidad: { type: Number },
  precioCaja: { type: Number },
  detalleCaja: { type: String }
});

module.exports = mongoose.model('Alfajor', AlfajorSchema, 'alfajores');