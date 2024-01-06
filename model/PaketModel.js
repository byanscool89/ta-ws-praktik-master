const mongoose = require('mongoose');

const paketSchema = new mongoose.Schema({
  id_paket: {
    type: Integer,
    required: true,
    unique: true,
  },
  nama_paket: {
    type: String,
    required: true,
  },
  harga_paket: {
    type: Number,
    required: true,
  },
  jumlah_data: {
    type: Number,
    required: true,
  },
  jumlah_telpon: {
    type: Number,
    required: true,
  },
  masa_aktif: {
    type: String,
    required: true,
  },
});

const PaketModel = mongoose.model('Paket', paketSchema);

module.exports = PaketModel;
