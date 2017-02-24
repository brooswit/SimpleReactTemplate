var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var t = require('./tiempo');


var webApp = express();

var openingRouter = buildOpeningRouter();
var mainRouter = buildMainRouter();
var closingRouter = buildMainRouter();

// webApp.set('port', process.env.PORT || 3000);
// webApp.set('view engine', 'ejs');
// webApp.engine('.html', require('ejs').renderFile());

webApp.use(openingRouter);
webApp.use(mainRouter);
webApp.use(closingRouter);

webApp.listen(3000, () => {
  console.log('webapp started');
});

function buildOpeningRouter() {
  var router = express.Router();

  router.use(logger('dev'));
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(cookieParser());

  return router;
}
function buildMainRouter() {
  var router = express.Router();

  router.use(express.static(__dirname + '/public', { maxAge: t.day }));
  webApp.use("/", express.static('/client'));

  return router;
}
function buildClosingRouter() {
  var router = express.Router();

  router.use(notFoundRoute);
  router.use(errorRoute);

  return router;
}

function notFoundRoute(req, res, next) {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
}

function errorRoute(err, req, res, next) {
  res.status(err['status'] || 500);
  res.render('error', { message: err.message, error: err });
}