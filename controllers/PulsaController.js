"use strict";

var response = require("../rest");
var connection = require("../koneksi");

// GET tampil data paket
exports.tampilpaket = function (req, res) {
  connection.query("SELECT * FROM pulsa", function (error, rows, fields) {
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
  var jumlahpulsa = req.body.jumlah_pulsa;
  var provider = req.body.provider;
  var hargapulsa = req.body.harga_pulsa;

  connection.query(
    "INSERT INTO pulsa (jumlah_pulsa,provider,harga_pulsa) VALUES(?,?,?)",
    [jumlahpulsa, provider, hargapulsa],
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
  var jumlahpulsa = req.body.jumlah_pulsa;
  var provider = req.body.provider;
  var hargapulsa = req.body.harga_pulsa;
  var idpulsa = req.params.idpaket;

  connection.query(
    "UPDATE pulsa SET jumlah_pulsa=?,provider=?,harga_pulsa=? WHERE id_pulsa=?",
    [jumlahpulsa, provider, hargapulsa, idpulsa],
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
  var idpulsa = req.params.idpaket;
  connection.query(
    "DELETE FROM pulsa WHERE id_pulsa=?",
    [idpulsa],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
        res.status(500).json({
          message: "Gagal menghapus data paket",
          error: error.message,
        });
      } else {
        response.ok("Berhasil Hapus Data!", res);
      }
    }
  );
};
