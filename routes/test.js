var express = require('express');
var path = require('path');

var router = express.Router();
var viewPath = path.join(__dirname, '..', 'views', 'test')

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

// 어차피 /test일 때만 여기로 들어오기 때문에 get은 '/'만 해도 된다.
router.get('/', function(req, res) {
	// res.sendFile(path.join(viewPath, 'test.html'));
	res.render(path.join(viewPath, 'test.pug'))
});

module.exports = router;