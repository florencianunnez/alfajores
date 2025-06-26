const mongoose = require('mongoose');

const alfajorSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precioUnidad: Number,
  precioCaja: Number,
  detalleCaja: String
});

module.exports = mongoose.model('Alfajor', alfajorSchema, 'alfajores');