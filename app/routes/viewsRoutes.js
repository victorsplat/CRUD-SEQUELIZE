const router = require('express').Router();
const viewsRoutes = require('../controllers/viewsController')
router.use(viewsRoutes)

module.exports = router