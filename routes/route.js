'use strict';

const bodyParser = require('body-parser');
const jsonpaket = require('../controllers/PaketController');
const jsonpulsa = require('../controllers/PulsaController');

module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve packages
    app.route('/paket/tampil')
        .get(jsonpaket.tampilpaket);

    // Endpoint to add a new package
    app.route('/paket/tambah')
        .post(jsonpaket.tambahpaket);

    // Endpoint to update a package (use colon `:` for route parameters)
    app.route('/paket/ubah/:idpaket')
        .put(jsonpaket.ubahpaket);

    app.route('/paket/hapus/:idpaket')
        .delete(jsonpaket.hapuspaket);
};

module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve packages
    app.route('/pulsa/tampil')
        .get(jsonpulsa.tampilpaket);

    // Endpoint to add a new package
    app.route('/pulsa/tambah')
        .post(jsonpulsa.tambahpaket);

    // Endpoint to update a package (use colon `:` for route parameters)
    app.route('/pulsa/ubah/:idpaket')
        .put(jsonpulsa.ubahpaket);

    app.route('/pulsa/hapus/:idpaket')
        .delete(jsonpulsa.hapuspaket);
};