const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ApiRoutes = require('../src/routes/api');
const UserRoutes = require('../src/routes/web/user');
const AdminRoutes = require('../src/routes/web/admin');
const config = require('./config');
const expressValidator = require('express-validator');
const Path = require('path');
const flash = require('express-flash');
const session = require('express-session');

// Set up the express app
const app = express();

if (config.env === 'development') {
    app.use(logger('dev'));
}

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(Path.join(__dirname,"../publics")));
app.use('/bower_components', express.static(Path.join(__dirname,"../../bower_components")));
app.set('view engine', 'ejs');
app.set('views', Path.join(__dirname, '../src/views'));
app.use(cookieParser());

// config session
app.use(session({
    cookieName: 'session',
    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
    duration: 30*60*1000,
    activeDuration: 5*60*1000,
    httpOnly: true,
    secure: true,
    resave: false,
    saveUninitialized: true,
    ephemeral: true
}));

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);

// config express-validator
app.use(expressValidator());  //required for Express-Validator
app.use(flash());
app.use('/api', ApiRoutes);
app.use('/', UserRoutes);
app.use('/admin', AdminRoutes)



module.exports = app;