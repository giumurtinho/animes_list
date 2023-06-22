const { Router } = require('express')
const UsersAnimesControllerController = require('../controllers/UsersAnimesController')

const router = Router()

router.get('/users_animes', UsersAnimesControllerController.catchUsers_animes)
router.get('/users_animes/:id', UsersAnimesControllerController.catchOneUsers_animes)
router.post('/users_animes', UsersAnimesControllerController.createUsers_animes)
router.put('/users_animes/:id', UsersAnimesControllerController.uptadeUsers_animes)
router.delete('/users_animes/:id', UsersAnimesControllerController.deleteUsers_animes)

module.exports = router