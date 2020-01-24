// Modules
var express = require('express');
// var http = require('http');
var path = require('path');

var favicon = require('serve-favicon')
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var rankingRouter = require('./routes/ranking');
var testRouter = require('./routes/test');

var app = express();

// All environment
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public/image', 'favicon.ico')))
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/ranking', rankingRouter);
app.use('/test', testRouter);
app.use(express.static(path.join(__dirname, '/public')));

// Create Server (Node 3.x and under)
// var server = http.createServer(app);
// sever.listen(app.get('port'), function() {
// 	console.log("Express Server has started on port " + app.get('port'))
// });

// Node 4.x and higher does not need http module
app.listen(app.get('port'), function() {
	console.log("Express Server listening on port " + app.get('port'))
});