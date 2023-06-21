const bodyParser = require('body-parser')
const app = require('./db/api')

module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('Olá'))
}