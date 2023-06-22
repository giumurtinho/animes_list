const bodyParser = require('body-parser')
const users = require('./usersRoutes')
const users = require('./animesRoutes')
const users = require('./usersAnimesRoutes')


module.exports = (app) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({extended: false}),
        users,
        animes,
        users_animes 
    )
    
}