const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

module.exports = app