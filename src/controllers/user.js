const resp = require('../helpers/helper')
const userModel = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  getAllUser: (req, res) => {
    userModel
      .getAllUser()
      .then(resultData => {
        const result = resultData
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
        resp.response(res, error, 400, 'error')
      })
  },
  getUserById: (req, res) => {
    const id_user = req.params.id_user
    userModel
      .getUserById(id_user)
      .then(resultData => {
        const result = resultData[0]
        resp.response(res, result)
      })
      .catch(error => {
        console.log(error)
        resp.response(res, error, 400, 'error')
      })
  },
  register: (req, res) => {
    const salt = resp.generateSalt(18)
    const passwordHash = resp.setPassword(req.body.password, salt)
    const data = {
      nama: req.body.nama,
      username: req.body.username,
      password: passwordHash.passwordHash,
      salt: passwordHash.salt,
      token: '',
      created_at: new Date()
    }
    userModel.register(data)
      .then(resultData => {
        resp.response(res, resultData, 200)
      })
      .catch(error => {
        resp.response(res, error, 400, 'username sudah dipakai')
      })
  },
  login: (req, res) => {
    const username = req.body.username
    const password = req.body.password
    userModel
      .getByUsername(username)
      .then(result => {
        const dataUser = result[0]
        const usePassword = resp.setPassword(password, dataUser.salt)
          .passwordHash

        if (usePassword === dataUser.password) {
          dataUser.token = jwt.sign(
            {
              id_user: dataUser.id_user,
              nama: dataUser.nama,
              username: dataUser.username,
              role: dataUser.name
            },
            process.env.SECRET_KEY,
            { expiresIn: '60m' }
          )
          const token = dataUser.token
          delete dataUser.salt
          delete dataUser.password

          userModel
            .updateToken(username, token)
            .then(resultToken => {
              return resp.response(res, resultToken, 200)
            })
            .catch(error => {
              console.log(error)
            })

          return resp.response(res, dataUser, 200)
        } else {
          return resp.response(res, null, 403, 'Wrong Password!')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
