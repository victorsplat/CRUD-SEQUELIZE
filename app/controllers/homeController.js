const router = require("express").Router();

router.post("/:option", async(req, res) => {
    try {
        const option = req.params.option;

        if (option !== "undefined") {
            if (option === "login") res.render("Login");
            if (option === "register") res.render("register");
        } else {
            console.log('option undefined')
        }
    } catch (error) {
        console.log("erro");
    }
});
module.exports = router;