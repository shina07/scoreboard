var express = require('express');
var path = require('path');

var router = express.Router();
var viewpath = path.join(__dirname + '/../views/login/')

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	res.render(path.join(viewpath + 'login.pug'));
	// res.sendFile(path.join(viewpath + 'login.html'))
});

module.exports = router;