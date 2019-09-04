require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const xssFilter = require('x-xss-protection')
const logger = require('morgan')

const port = process.env.PORT || 6000;

const userRoute = require('./src/routes/user')
const kategoriRoute = require('./src/routes/kategori')
const menuRoute = require('./src/routes/menu')
const transaksiRoute = require('./src/routes/transaksi')

app.listen(port, () => {
    console.log(`Mulai di port ${port}`)
});

app.use(xssFilter())
app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoute)
app.use('/kategori', kategoriRoute)
app.use('/menu', menuRoute)
app.use('/transaksi', transaksiRoute)