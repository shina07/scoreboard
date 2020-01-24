var express = require('express');
var path = require('path');

var router = express.Router();
var viewpath = path.join(__dirname + '/../views/index/')

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	// res.sendFile(path.join(viewpath + 'index.html'));
	res.render(path.join(viewpath, 'index.pug'));
});

router.get('/introduction', function(req, res) {
	res.render(path.join(viewpath, 'introduction.pug'));
});

module.exports = router;