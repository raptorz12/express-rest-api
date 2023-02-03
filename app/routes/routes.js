const heroController = require('../controllers/hero.controller')

const router = require('express').Router()

router.post('/addhero', heroController.createHero)
router.get('/getallheroes', heroController.getAllHeroes)
router.get('/gethero/:id', heroController.getHeroById)
router.put('/updatehero/:id', heroController.updateHero)
router.delete('/deletehero/:id', heroController.deleteHero)

module.exports = router