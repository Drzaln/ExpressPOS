require('dotenv').config()
const transaksiModel = require('../models/transaksi')
const resp = require('../helpers/helper')
const multer = require('multer')
const path = require('path')
const nodemailer = require('nodemailer')

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
  },
  sendMail: async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()
    let smtpTransport = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    })

    var mailOptions = {
      from: '"Fred Foo" <foo@example.com>',
      to: 'Recipient <sfbid@it-simple.net>',
      subject: 'testing',
      text: 'ini teks ya',
      html: '<b>Hello world?</b>'
    }
    console.log(mailOptions)
    smtpTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
        res.end('error')
      } else {
        console.log('Message sent: ' + info.messageId,'\n', info.response)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        res.end('sent')
      }
    })
  }
}
