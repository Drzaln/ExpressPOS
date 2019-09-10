var nodemailer = require('nodemailer')
module.exports = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  })
  console.log(req.body)
  let mailOptions = {
    from: 'udin@mail.com',
    to: 'rizaaru@gmail.com',
    subject: 'testing',
    text: 'ini teks ya',
    html: '<b>Hello world?</b>'
  }
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      res.json('Sukses')
    }
  })
}
