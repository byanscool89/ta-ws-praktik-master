// Import Mongoose
const mongoose = require('mongoose');

// Definisikan skema menggunakan mongoose.Schema
const pulsaSchema = new mongoose.Schema({
  id_pulsa: {
    type: Integer,
    required: true,
    unique: true, // Pastikan id_pulsa bersifat unik
  },
  jumlah_pulsa: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  harga_pulsa: {
    type: Number,
    required: true,
  },
});

// Buat model menggunakan mongoose.model
const PulsaModel = mongoose.model('Pulsa', pulsaSchema);

// Export model untuk digunakan di berkas lain
module.exports = PulsaModel;
