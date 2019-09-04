const conn = require('../config/connect')

module.exports = {
  getAllMenu: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM menu INNER JOIN kategori ON menu.id_kategori = kategori.id_kategori ORDER BY id_menu ASC',
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

  getMenuByCategory: kategori => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM menu INNER JOIN kategori ON menu.id_kategori = kategori.id_kategori WHERE kategori = ?',
        kategori,
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

  getMenuById: id_menu => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM menu WHERE id_menu = ?',
        id_menu,
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

  postMenu: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO menu SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  editMenu: (data, id_menu) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE menu SET ? WHERE id_menu = ?',
        [data, id_menu],
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

  deleteMenu: id_menu => {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM menu WHERE id_menu = ?',
        id_menu,
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
