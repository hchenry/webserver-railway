//https://www.npmjs.com/package/express
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');

//Handlebar
app.set('view engine', 'hbs');


//Carpeta de parciales
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));      //Middleware

app.get('/', (req, res) => {
  res.render('home', {
    nombre:'Luis Henry Herrera Chicana',
    titulo:'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
    //res.send('404 page not found1');
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
      nombre:'Luis Henry Herrera Chicana',
      titulo:'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    //res.send('404 page not found1');
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
      nombre:'Luis Henry Herrera Chicana',
      titulo:'Curso de Node'
    });
})

  // app.get('/hola-mundo', (req, res) => {
  //   res.send('Hello World en su respectiva ruta')
  // })

  // app.get('*', (req, res) => {
  //   //res.send('404 page not found1');
  //   res.sendFile(__dirname + '/public/404.html');
  // })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
