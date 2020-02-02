var express = require('express');
var path = require('path');
var db_connection = require('../db_connection');
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

// router.post('/', function(req, res) {
	
	
// 	var user_id = req.body.user_id;
// 	var password = req.body.password;
	

// 	var query = db_connection.query("CALL select_user(?)", user[0], function (error, results, fields) {
// 		if (error) {
// 			console.log(__filename, "ERROR OCURRED. Error: \n", error);
// 		} 

// 		if (!result[0])
// 			return res.send('please check your id');

// 		var user = result[0];


// });

router.get('/fail', function(req, res) {
	res.render(path.join(viewpath + 'fail.pug'));
});

router.get('/signup', function(req, res) {
	res.render(path.join(viewpath + 'signup.pug'))
});

router.get('/user', function(req, res) {
	var query = db_connection.query('SELECT * FROM user', function(err, rows) {
		console.log(rows);
		res.json(rows);
	});
});

router.post('/select/userid', function(req, res) {
	var user_id = req.body.user_id;

	var query = db_connection.query("CALL select_user_by_user_id(?)", user_id, function (error, rows, fields) {
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
	var user_name = req.body.user_name;

	var query = db_connection.query("CALL select_user_by_user_name(?)", user_name, function (error, rows, fields) {
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

	var query = db_connection.query("CALL insert_user(?, ?, ?, ?, ?, ?)", user, function (error, results, fields) {
		if (error) {
			console.log(__filename, "ERROR OCURRED. Error: \n", error);
			// res.render(path.join(viewpath + 'fail.pug'));
		} else {
			console.log (__filename, "QUERY APPLIED. Result: \n", results);
			// res.render(path.join(viewpath + 'success.pug'));
		};
	});
	
});

router.get('/success', function(req, res) {
	res.render(path.join(viewpath + 'success.pug'));
});

module.exports = router;