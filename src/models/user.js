const conn = require('../config/connect')

module.exports = {
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM user', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getUserById: id_user => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM user WHERE id_user = ?',
        id_user,
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

  postUser: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  register: data => {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO user SET ?`, data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getByUsername: username => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM user WHERE username = ?',
        username,
        (err, result) => {
          if (!err) {
            console.log(result)
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  updateToken: (username, token) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE user SET token = ? WHERE username = ?',
        [token, username],
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

  editUser: (data, id_user) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE user SET ? WHERE id_user = ?',
        [data, id_user],
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

  deleteUser: id_user => {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM user WHERE id_user = ?',
        id_user,
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
