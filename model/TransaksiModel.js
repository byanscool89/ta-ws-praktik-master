const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  id_transaksi: {
    type: String,
    required: true,
    unique: true,
  },
  id_pembeli: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pembeli',
    required: true,
  },
  id_paket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paket',
    required: true,
  },
  id_pulsa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pulsa',
    required: true,
  },
  waktu: {
    type: Date,
    default: Date.now,
  },
  jenis: {
    type: String,
    enum: ['paket', 'pulsa'], // Hanya menerima 'paket' atau 'pulsa'
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
});

const TransaksiModel = mongoose.model('Transaksi', transaksiSchema);

module.exports = TransaksiModel;
