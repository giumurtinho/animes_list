const { Router } = require('express')
const AnimesController = require('../controllers/AnimesController')

const router = Router()

router.get('/animes', AnimesController.catchAnimes)
router.get('/animes/:id', AnimesController.catchOneAnimes)
router.post('/animes', AnimesController.createAnimes)
router.put('/animes/:id', AnimesController.uptadeAnimes)
router.delete('/animes/:id', AnimesController.deleteAnimes)

module.exports = router