const router = require('express').Router();
const userRoutes = require('../controllers/userController')
router.use('/account', userRoutes)

module.exports = router