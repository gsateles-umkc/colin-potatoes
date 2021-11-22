const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
});

app.listen(3000);