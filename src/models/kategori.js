const conn = require('../config/connect')

module.exports = {
  getAllKategori: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM kategori', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getKategoriById: id_kategori => {
    return new Promise((resolve, reject) => {
      conn.query(
        'SELECT * FROM kategori WHERE id_kategori = ?',
        id_kategori,
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

  postKategori: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO kategori SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  editKategori: (data, id_kategori) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE kategori SET ? WHERE id_kategori = ?',
        [data, id_kategori],
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

  deleteKategori: id_kategori => {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM kategori WHERE id_kategori = ?',
        id_kategori,
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
