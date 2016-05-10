var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require('./config.js');

var webRouter = require('./web_router.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("view options",{
  "open":"{{",
  "close":"}}",
  layout: 'layout.ejs'
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//session也是存入mongodb
app.use(session({
  secret: config.session_secret,
  store: new MongoStore({
    url: config.db,
    ttl: 24 * 60 * 60, // = 14 days. Default
    //autoRemove: 'disabled'
  }),
  name: 'sessionid',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  //cookie: {maxAge: 15*60*1000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: true,
  saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, 'public'), {setHeaders: function (res, path, stat) {
  //为静态文件设置x-timestamp头属性
  res.set('x-timestamp', Date.now());
}}));

app.use(function(req, res, next){
  res.toJson = function(msg){
    res.json({'code':1,'msg':msg});
  }
  next();
})

if (app.get('env') === 'development') {
  app.use('/debugPage', require('./test/debugPage.js'));
}

app.use('/', webRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
