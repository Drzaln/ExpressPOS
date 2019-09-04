const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const categoryController = require('../controllers/kategori')

Routes
    // .all('/*', auth.authInfo)
    .get('/', categoryController.getAllKategori)
    .post('/', categoryController.postKategori)
    .delete('/:id_kategori', categoryController.deleteKategori)
    .patch('/:id_kategori', categoryController.editKategori)

module.exports = Routes