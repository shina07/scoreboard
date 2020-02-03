var express = require('express');
var path = require('path');

var router = express.Router();
var viewPath = path.join(__dirname, '..', 'views', 'home')

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	res.render(path.join(viewPath, 'home.pug'));
});

router.get('/about', function(req, res) {
	res.render(path.join(viewPath, 'about.pug'));
});

router.get('/introduction', function(req, res) {
	res.render(path.join(viewPath, 'introduction.pug'));
});

router.get('/privacy', function(req, res) {
	res.render(path.join(viewPath, 'privacy.pug'));
});

router.get('/terms', function(req, res) {
	res.render(path.join(viewPath, 'terms.pug'));
});

module.exports = router;