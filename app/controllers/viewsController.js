const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('home', { pageName: 'Home' })
})

module.exports = router