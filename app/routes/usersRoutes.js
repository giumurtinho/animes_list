const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const router = Router()

router.get('/users', UsersController.catchUsers)
router.get('/users/:id', UsersController.catchOneUser)
router.post('/users', UsersController.createUser)
router.put('/users/:id', UsersController.uptadeUser)
router.delete('/users/:id', UsersController.deleteUser)

module.exports = router