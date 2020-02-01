var mysql = require('mysql');
var db_config = require('./config.json').db_config;

// MySQL Connection Setting
var connection = mysql.createConnection({
	host: db_config.host,
	port: db_config.port,
	user: db_config.user,
	password: db_config.password,
	database: db_config.database
});

connection.connect(function(error) {
	if (error) {
		console.log("ERROR Ocurred", error);
		throw error;
	};
});
module.exports = connection;
