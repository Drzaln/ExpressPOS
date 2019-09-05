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
    // user: "5u6oIbJGbd",
    // password: "fAUunrrxHL",
    // database: "5u6oIbJGbd",
})

// Username: 5u6oIbJGbd

// Database name: 5u6oIbJGbd

// Password: fAUunrrxHL

// Server: remotemysql.com

// Port: 3306

connect.connect((err) => {
    if (err) {
        throw err
    }
    console.log('terkonek DB')
})

module.exports = connect