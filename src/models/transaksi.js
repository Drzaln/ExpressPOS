const conn = require('../config/connect')

module.exports = {
  getAllTransaki: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM transaki INNER JOIN user ON transaki.id_user = user.id_user INNER JOIN menu ON transaki.id_menu = menu.id_menu ORDER BY id_transaki DESC',
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  getTransakiById: id_transaki => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM transaki WHERE id_transaki = ?',
        id_transaki,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  postTransaki: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO transaki SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  editTransaki: (data, id_transaki) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE transaki SET ? WHERE id_transaki = ?',
        [data, id_transaki],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  deleteTransaki: id_transaki => {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM transaki WHERE id_transaki = ?',
        id_transaki,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}
