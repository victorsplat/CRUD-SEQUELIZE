const router = require('express').Router();
const { User } = require('./models')

router.get('/users', async(req, res) => {
    const users = await User.findAll();
    res.json(users);
}); //Listar todos

router.post('/register', async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
}); // Registrar

router.get('/users/:id', async(req, res) => {
    const id = req.params.id;
    const user = await User.findAll({
        where: {
            id: id
        }
    })
    res.json(user);
}); //Buscar

router.put('/users/:id', async(req, res) => {
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
}); //Editar

router.delete('/users/:id', async(req, res) => {
    const id = req.params.id;
    await User.destroy({
        where: {
            id: id
        }
    })
    res.send('User ' + id + ' Deleted')
}); //Deletar

module.exports = router