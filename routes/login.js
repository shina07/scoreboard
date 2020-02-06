var express = require('express');
var path = require('path');

var models = require("../database/models");
var viewPath = path.join(__dirname, '..', 'views', 'login');

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
	models.user.findAll().then( result => {
		res.json(result);
	}).catch ( err => {
		console.log("ERROR OCCURRED... ERROR: \n", err);
	});
});

router.post('/select/userid', function(req, res) {
	var userId = req.body.user_id;

	models.user.findAll({
		where: { userId: userId }
	}).then( result => {
		if (result.length > 0) {
			res.send(true);
		} else {
			res.send(false);
		}
	}).catch( err => {
		console.log("ERROR OCCURRED... ERROR: \n", err);
	});
});

router.post('/select/username', function(req, res) {
	var userName = req.body.user_name;

	models.user.findAll({
		where: { userName: userName }
	}).then( result => {
		if (result.length > 0) {
			res.send(true);
		} else {
			res.send(false);
		}
	}).catch( err => {
		console.log("ERROR OCCURRED... ERROR: \n", err);
	});
});

router.post('/signup', function(req, res) {
	
	var userId = req.body.user_id;
	var password = req.body.password;
	var lastName = req.body.last_name;
	var firstName = req.body.first_name;
	var userName = req.body.user_name;
	var email = req.body.email;

	models.user.create({
		userId: userId,
		passwordHash: password,
		lastName: lastName,
		firstName: firstName,
		userName: userName,
		email: email,
		salt: ""
	}).then( result => {
		console.log (__filename, "QUERY APPLIED. Result: \n", results);
		res.render(path.join(viewPath, 'success.pug'));
	}).catch ( err => {
		console.log(__filename, "ERROR OCCURRED. Error: \n", err);
		res.render(path.join(viewPath, 'fail.pug'), { message: err });
	});
});

router.get('/success', function(req, res) {
	res.render(path.join(viewPath, 'success.pug'));
});

module.exports = router;