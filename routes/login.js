var express = require('express');
var path = require('path');
var dbmanager = require('../dbmanager');
var viewpath = path.join(__dirname + '/../views/login/')

var router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	res.render(path.join(viewpath + 'login.pug'));
	// res.sendFile(path.join(viewpath + 'login.html'))
});

router.get('/fail', function(req, res) {
	res.render(path.join(viewpath + 'fail.pug'));
});

router.get('/signup', function(req, res) {
	res.render(path.join(viewpath + 'signup.pug'))
});

router.get('/select', function(req, res) {
	var query = connection.query('SELECT * FROM User', function(err, rows) {
		console.log(rows);
		res.json(rows);
	});
});

router.post('/signup', function(req, res) {
	
	var user = [
		req.body.user_id,
		req.body.password,
		req.body.last_name,
		req.body.first_name,
		req.body.user_name,
		req.body.email
	];

	var query = dbmanager.query("CALL insert_user(?, ?, ?, ?, ?, ?)", user, function (error, results, fields) {
		if (error) {
			console.log(__filename, "ERROR OCURRED. Error: \n", error);
			res.render(path.join(viewpath + 'fail.pug'));
		} else {
			console.log (__filename, "QUERY APPLIED. Result: \n", results);
			res.render(path.join(viewpath + 'success.pug'));
		};
	});
	
});

router.get('/success', function(req, res) {
	res.render(path.join(viewpath + 'success.pug'));
});

module.exports = router;