const router = require('express').Router();
const { User } = require('../models')
const login = require('../controllers/authenticate/login')

router.use('/login', login)

router.get('/', async(req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);

    } catch (error) {
        console.error(error)
    }

}); //Listar todos

router.post('/', async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);

    } catch (error) {
        console.error(error)
    }
}); // Registrar

router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findAll({
            where: {
                id: id
            }
        })
        res.json(user);

    } catch (error) {
        console.error(error)
    }
}); //Buscar

router.put('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, {
            where: {
                id: id
            }
        })
        res.json(user)

    } catch (error) {
        console.error(error)
    }
}); //Editar

router.delete('/:id', async(req, res) => {
    res.send('User ' + id + ' Deleted')
    try {
        const id = req.params.id;
        await User.destroy({
            where: {
                id: id
            }
        })

    } catch (error) {
        console.error(error)
    }
}); //Deletar

module.exports = router