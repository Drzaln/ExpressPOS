require('dotenv').config()
const sql = require('mysql')

const connect = sql.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_NAME,

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactpos',
    
    // host: "remotemysql.com",
    // user: "NsS3iZedQb",
    // password: "ahOgeEQ2oy",
    // database: "NsS3iZedQb",
})

connect.connect((err) => {
    if (err) {
        throw err
    }
    console.log('terkonek DB')
})

module.exports = connect