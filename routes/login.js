var express = require('express');
var path = require('path');

var dbConnection = require('../db-connection');
var viewPath = path.join(__dirname, '..', 'views', 'login')

var router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now(), __filename);
	next();
});

router.get('/', function(req, res) {
	res.render(path.join(viewPath, 'login.pug'));
});

router.get('/fail', function(req, res) {
	res.render(path.join(viewPath, 'fail.pug'));
});

router.get('/signup', function(req, res) {
	res.render(path.join(viewPath, 'signup.pug'))
});

router.get('/user', function(req, res) {
	var query = dbConnection.query('SELECT * FROM user', function(err, rows) {
		console.log(rows);
		res.json(rows);
	});
});

router.post('/select/userid', function(req, res) {
	var userId = req.body.user_id;

	var query = dbConnection.query("CALL select_user_by_user_id(?)", userId, function (error, rows, fields) {
		if (error) {
			console.log(__filename, "ERROR OCURRED. Error: \n", error);
			res.send(error);
		} else {
			console.log(__filename, "QUERY APPLIED. Result: \n", rows);
			if (rows[0].length > 0) {
				// User exists
				res.send(true);

			} else {
				res.send(false);
			}
		};
	});
});

router.post('/select/username', function(req, res) {
	var userName = req.body.user_name;

	var query = dbConnection.query("CALL select_user_by_user_name(?)", userName, function (error, rows, fields) {
		if (error) {
			console.log(__filename, "ERROR OCURRED. Error: \n", error);
			res.send(error);
		} else {
			console.log(__filename, "QUERY APPLIED. Result: \n", rows);
			if (rows[0].length > 0) {
				// User exists
				res.send(true);

			} else {
				res.send(false);
			}
		};
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

	var query = dbConnection.query("CALL insert_user(?, ?, ?, ?, ?, ?)", user, function (error, results, fields) {
		if (error) {
			console.log(__filename, "ERROR OCURRED. Error: \n", error);
			// res.render(path.join(viewPath + 'fail.pug'));
		} else {
			console.log (__filename, "QUERY APPLIED. Result: \n", results);
			// res.render(path.join(viewPath + 'success.pug'));
		};
	});
	
});

router.get('/success', function(req, res) {
	res.render(path.join(viewPath, 'success.pug'));
});

module.exports = router;