const kategoriModel = require('../models/kategori')
const resp = require('../helpers/helper')
const multer = require('multer')
const path = require('path')

module.exports = {
  getAllKategori: (req, res) => {
    kategoriModel
      .getAllKategori()
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  getKategoriById: (req, res) => {
    const id_kategori = req.params.id_kategori
    kategoriModel
      .getKategoriById(id_kategori)
      .then(resultData => {
        const result = resultData[0]
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  postKategori: (req, res) => {
    const data = {
      kategori: req.body.kategori
    }

    kategoriModel
      .postKategori(data)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  editKategori: (req, res) => {
    const id_kategori = req.params.id_kategori
    const data = {
      kategori: req.body.kategori
    }
    kategoriModel
      .editKategori(data, id_kategori)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteKategori: (req, res) => {
    const id_kategori = req.params.id_kategori
    kategoriModel
      .deleteKategori(id_kategori)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
