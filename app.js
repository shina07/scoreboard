// Modules
// var http = require('http');
var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var session = require('express-session');

// All Routers
var index = require('./routes/index');
var home = require('./routes/home')
var login = require('./routes/login');
var ranking = require('./routes/ranking');
var test = require('./routes/test');

var app = express();

// All environment
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(__dirname, 'public/image', 'favicon.ico')))
app.use(session({	resave: true,
					saveUninitialized: true,
					secret: 'secret' }));

app.use('/', index);
app.use('/home', home)
app.use('/login', login);
app.use('/ranking', ranking);
app.use('/test', test);

// Create server instance
// var server = http.createServer(app);
// sever.listen(app.get('port'), function() {
// 	console.log("Express Server has started on port " + app.get('port'))
// });

// Express create server (app.listen also returns server instance)
var server = app.listen(app.get('port'), function() {
	console.log("Express Server listening on port " + app.get('port'))
});