const mongoose = require('mongoose');

// Creamos el esquema de una promoción
const PromocionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  productosAplicables: [
    {
      nombreProducto: { type: String }
    }
  ],
  descuento: { type: Number },
  fechaInicio: { type: Date },
  fechaFin: { type: Date },
  //condiciones de la promo
  condiciones: { type: String }
});

module.exports = mongoose.model('Promocion', PromocionSchema, 'promociones');
