const express = require('express');
const bodyParser = require('body-parser');

//encodes urls and turns off extended option
app.use(bodyParser.urlendoded({extended: false}));
require('./data.json');

//Optionally - the path module which can be used when setting the absolute path in the express.static function.
const app = express();

//Sets view engine to pug
app.set('view engine', 'pug');

//index route
app.get('/index', (req, res) => {
    res.send('Index');

});

//about route
// app.get('/about', (req, res) => {
//     res.send('About');
// });

//about route
app.get('/About', (req, res) => {
    res.render('about');
});

app.get('/', (req, res) => {
    res.render('index');
});

//example
app.get('/', (req, res) => {
    res.send('I love you');
});

app.get('/cards', (req, res) => {
    res.render('cards', { prompt: "Who is buried in Grant's tomb?" });
});

//Dynamic project routes i.e. project/:id

app.listen(3001);

// app.listen(3001, () => {
//     console.log('The app is running on localhost:3001!')
// });

