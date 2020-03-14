const express = require('express');

const app = express();
const { User } = require('./app/models');
const router = require('./app/routes/routes')
const bodyParser = require('body-parser');

//use middleware to serve static files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug')

app.use(router)

app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log("Server Running")
});
module.exports = app