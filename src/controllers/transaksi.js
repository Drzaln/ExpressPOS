const transaksiModel = require('../models/transaksi')
const resp = require('../helpers/helper')
const multer = require('multer')
const path = require('path')

module.exports = {
  getAllTransaksi: (req, res) => {
    transaksiModel
      .getAllTransaki()
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  getTransaksiById: (req, res) => {
    const id_transaksi = req.params.id_transaksi
    transaksiModel
      .getTransakiById(id_transaksi)
      .then(resultData => {
        const result = resultData[0]
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  postTransaksi: (req, res) => {
    const data = {
      id_transaksi: req.body.id_transaksi,
      id_user: req.body.id_user,
      id_menu: req.body.id_menu,
      quantity: req.body.quantity,
      status: req.body.status,
      created_at: new Date()
    }

    transaksiModel
      .postTransaki(data)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  editTransaksi: (req, res) => {
    const id_transaksi = req.params.id_transaksi
    const data = {
      id_user: req.body.id_user,
      id_menu: req.body.id_menu,
      quantity: req.body.quantity,
      status: req.body.status
    }
    transaksiModel
      .editTransaki(data, id_transaksi)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteTransaksi: (req, res) => {
    const id_transaksi = req.params.id_transaksi
    transaksiModel
      .deleteTransaki(id_transaksi)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
