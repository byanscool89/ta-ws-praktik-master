"use strict";

var response = require("../rest");
var connection = require("../koneksi");

// GET tampil data paket
exports.tampilpaket = function (req, res) {
  connection.query("SELECT * FROM paket", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// POST tambahkan data paket
exports.tambahpaket = function (req, res) {
  //body data yang akan kita POST
  var namapaket = req.body.namapaket;
  var hargapaket = req.body.hargapaket;
  var jumlahdata = req.body.jumlahdata;
  var jumlahtelpon = req.body.jumlahtelpon;
  var masaaktif = req.body.masaaktif;

  connection.query(
    "INSERT INTO paket(nama_paket,harga_paket,jumlah_data,jumlah_telpon,masa_aktif) VALUES(?,?,?,?,?)",
    [namapaket, hargapaket, jumlahdata, jumlahtelpon, masaaktif],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

// PUT mengubah data paket berdasarkan [id]
exports.ubahpaket = function (req, res) {
  //body data yang akan kita POST
  var namapaket = req.body.namapaket;
  var hargapaket = req.body.hargapaket;
  var jumlahdata = req.body.jumlahdata;
  var jumlahtelpon = req.body.jumlahtelpon;
  var masaaktif = req.body.masaaktif;
  var idpaket = req.params.idpaket;

  connection.query(
    "UPDATE paket SET nama_paket=?, harga_paket=?, jumlah_data=?, jumlah_telpon=?, masa_aktif=? WHERE id_paket=?",
    [namapaket, hargapaket, jumlahdata, jumlahtelpon, masaaktif, idpaket],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "Gagal mengubah data paket", error: error.message });
      } else {
        response.ok("Berhasil Ubah Data!", res);
      }
    }
  );
};

// DELETE menghapus data paket berdasarkan [id]
exports.hapuspaket = function (req, res) {
  var idpaket = req.params.idpaket;
  connection.query(
    "DELETE FROM paket WHERE id_paket=?",
    [idpaket],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({
            message: "Gagal menghapus data paket",
            error: error.message,
          });
      } else {
        response.ok("Berhasil Hapus Data!", res);
      }
    }
  );
};
