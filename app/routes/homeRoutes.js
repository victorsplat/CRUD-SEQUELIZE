const router = require('express').Router();
const homeRoutes = require('../controllers/homeController')

router.use('/authenticate', homeRoutes);

module.exports = router