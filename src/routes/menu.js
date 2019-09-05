const express = require('express')
const Route = express.Router()
const multer = require('multer')
const path = require('path')

const menuController = require('../controllers/menu')
const auth = require('../helpers/auth')

let imageStore = multer.diskStorage({
    // destination: function (req, file, callback) {
    //   callback(null, './uploads/images/')
    // },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + '_' + Date.now() + path.extname(file.originalname)
      )
    }
  })
  
  let upload = multer({ storage: imageStore, limits: { fileSize: 1000000000 } })
  
Route
    .get('/', menuController.getAllMenu)
    .get('/id_menu', menuController.getMenuById)
    .post('/', upload.single('foto'), menuController.postMenu)
    .delete('/:id_menu', menuController.deleteMenu)
    .patch('/:id_menu', upload.single('foto'), menuController.editMenu)

module.exports = Route