var express = require('express');
var path = require('path');

var router = express.Router();
var viewPath = path.join(__dirname, '..', 'views', 'index')

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	res.render(path.join(viewPath, 'index.pug'));
});

module.exports = router;