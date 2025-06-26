const mongoose = require('mongoose');

const promocionSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  // Referencia a los productos aplicables (alfajores) obj id para relacionar el modelo alfajor
  productosAplicables: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alfajor'
  }],
  descuento: Number,
  fechaInicio: Date,
  fechaFin: Date,
  condiciones: String
});

module.exports = mongoose.model('Promocion', promocionSchema, 'promociones');
