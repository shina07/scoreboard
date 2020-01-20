// Modules
var express = require('express');
// var http = require('http');
var path = require('path');

var app = express();

// All environment
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '/views'));
// To use html
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Routing Module
var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/login', loginRouter);

app.use(express.static(path.join(__dirname, '/public')));

// Create Server
// var server = http.createServer(app);
// sever.listen(app.get('port'), function() {
// 	console.log("Express Server has started on port " + app.get('port'))
// });

// Node 4.x and higher does not need http module
app.listen(app.get('port'), function() {
	console.log("Express Server listening on port " + app.get('port'))
});