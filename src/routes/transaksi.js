const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const controllerTransaksi = require('../controllers/transaksi')

Routes
    // .all('/*', auth.authInfo)
    .get('/', controllerTransaksi.getAllTransaksi)
    .post('/', controllerTransaksi.postTransaksi)
    .post('/email', controllerTransaksi.sendMail)

module.exports = Routes