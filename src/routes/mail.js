const express = require('express')
const Route = express.Router()
const controller = require('../controllers/mail')
Route
.post('/',controller)

module.exports = Route