const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async(req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        const user = await User.findAll({
            where: {
                email: email
            },
            raw: true
        });
        if (!user[0]) {
            res.render("login", { error: "* Usuário não Encontrado" });
        } else {
            const userFinal = user[0]
            if (pass === userFinal.password) {
                console.log("Usuário Logado!");
                res.render('account', { id: userFinal.id, name: userFinal.name, email: userFinal.email, pass: userFinal.password })
            } else {
                res.render("login", { error: "* Senha Invalida" });
            }
        }
    } catch (error) {
        console.error(error);
    }
}); //Buscar por email

module.exports = router;