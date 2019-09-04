const menuModel = require('../models/menu')
const resp = require('../helpers/helper')
const multer = require('multer')
const path = require('path')
const cloudinary = require('cloudinary')

module.exports = {
  getAllMenu: (req, res) => {
    menuModel
      .getAllMenu()
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  getMenuById: (req, res) => {
    const id_menu = req.params.id_menu
    menuModel
      .getMenuById(id_menu)
      .then(resultData => {
        const result = resultData[0]
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  postMenu: async(req, res) => {
    // let fileName = '/images/' + req.file.filename
    const path = req.file.path
    const getUrl = async req => {
      cloudinary.config({
        cloud_name: 'drkil2jlo',
        api_key: '742171894379478',
        api_secret: 'E-YamDDHf2I6Y3k5TQ9sqh4A9Aw'
      })

      let dataImg
      await cloudinary.uploader.upload(path, result => {
        console.log(`coba cloud`, path)
        dataImg = result.url
      })
      return dataImg
    }
    const data = {
      id_kategori: req.body.id_kategori,
      nama: req.body.nama,
      foto: await getUrl(),
      harga: req.body.harga
    }

    menuModel
      .postMenu(data)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },

  editMenu: (req, res) => {
    const id_menu = req.params.id_menu
    let fileName = '/images/' + req.file.filename
    console.log('nama file', fileName)
    const data = {
      id_menu: req.body.id_menu,
      nama: req.body.nama,
      foto: fileName,
      harga: req.body.harga
    }
    menuModel
      .editMenu(data, id_menu)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteMenu: (req, res) => {
    const id_menu = req.params.id_menu
    menuModel
      .deleteMenu(id_menu)
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
