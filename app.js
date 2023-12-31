//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');

var app = express();
//encodes urls and turns off extended option
//app.use(bodyParser.urlencoded({extended: false}));

//View engine setup
//app.set('views', path.join(_dirname, 'views'));
//Sets view engine to pug
app.set('view engine', 'pug');

//app.use(express.static('public'))
app.use("/static", express.static("public"));
app.use(cookieParser());
//app.use(express.json());

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.use((req, res, next) => {
    console.log("I'm sorry, but this page is not found");
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if(err.status === 404){
        res.status(404);
        err.status = 404;
        err.message = "not-found";
        res.render('page-not-found', {err});
    } else {
        err.status =  err.status || 500;
        console.log(err.status);
        err.message = err.message || "Whoops!";
       
        res.render('error', {err});
    }
})


app.listen(3001);

module.exports = app;