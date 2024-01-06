// Import Mongoose
const mongoose = require('mongoose');

// Definisikan skema menggunakan mongoose.Schema
const pembeliSchema = new mongoose.Schema({
  id_pembeli: {
    type: Integer,
    required: true,
    unique: true, // Pastikan id_pembeli bersifat unik
  },
  email: {
    type: String,
    required: true,
    unique: true, // Pastikan email bersifat unik
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Validasi format email
  },
});

// Buat model menggunakan mongoose.model
const PembeliModel = mongoose.model('Pembeli', pembeliSchema);

// Export model untuk digunakan di berkas lain
module.exports = PembeliModel;
