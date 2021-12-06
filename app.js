const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
});


// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    { title: "Great Review", movieTitle: "Batman II" },
    { title: "Awesome Movie", movieTitle: "Titanic" }
  ]
  
  // INDEX
  app.get('/reviews', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
  })

app.listen(3000);