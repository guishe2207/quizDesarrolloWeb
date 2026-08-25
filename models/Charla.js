const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: String,
  stock: { type: Number, default: 0 },
  imagen: String
});

module.exports = mongoose.model('Charla', productoSchema, 'muebles');