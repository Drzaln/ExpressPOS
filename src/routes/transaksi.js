const express = require('express')
const Routes = express.Router()
const auth = require('../helpers/auth')
const controllerTransaksi = require('../controllers/transaksi')

Routes
    // .all('/*', auth.authInfo)
    .get('/', controllerTransaksi.getAllTransaksi)
    // .get('/day', controllerTransaksi.getTransactionByDay)
    // .get('/week', controllerTransaksi.getTransactionByWeek)
    // .get('/month', controllerTransaksi.getTransactionByMonth)
    // .get('/year', controllerTransaksi.getTransactionByYear)
    .post('/', controllerTransaksi.postTransaksi)

module.exports = Routes