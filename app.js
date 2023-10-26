//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./Routes/index');
var aboutRouter = require('./routes/about');
var projectRouter = require('./routes/project');

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
app.use('/project', projectRouter);

app.use((req, res, next) => {
    console.log("Hello");
    const err = new Error("oh noes!");
    next();
});
app.use((req, res, next) => {
    console.log("world");
    next();
})


app.listen(3001);

module.exports = app;