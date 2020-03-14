const router = require('express').Router()
const userRoutes = require('./userRoutes')
const homeRoutes = require('./homeRoutes')
const viewsRoutes = require('./viewsRoutes')

router.use(userRoutes)

router.use(homeRoutes)

router.use(viewsRoutes)


module.exports = router;