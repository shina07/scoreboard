var mysql = require('mysql2');
var dbConfig = require('./app-config.json').dbConfig;

// MySQL Connection Setting
var connection = mysql.createConnection({
	host: dbConfig.host,
	port: dbConfig.port,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
});

connection.connect(function(error) {
	if (error) {
		console.log("ERROR Ocurred", error);
		throw error;
	};
});
module.exports = connection;
