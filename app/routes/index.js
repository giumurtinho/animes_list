const bodyParser = require('body-parser')
const usersRoutes = require('./usersRoutes')
const animesRoutes = require('./animesRoutes')
const usersAnimesRoutes = require('./usersAnimesRoutes')


module.exports = (app) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({extended: false}),
        usersRoutes,
        animesRoutes,
        usersAnimesRoutes 
    )
    
}