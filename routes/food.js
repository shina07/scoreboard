var express = require('express');
var path = require('path');

var router = express.Router();
var viewPath = path.join(__dirname, '..', 'views', 'food')

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	res.render(path.join(viewPath, 'foodhome.pug'));
});

router.get('/gallery', function(req, res) {
	res.render(path.join(viewPath, 'gallery.pug'));
});

module.exports = router;