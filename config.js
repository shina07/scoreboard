require('dotenv').config();
const env = process.env;

const development = {
	username: env.MYSQL_USERNAME,
	password: env.MYSQL_PASSWORD,
	database: env.MYSQL_DATABASE,
	host: env.MYSQL_HOST,
	dialect: env.DATABASE_DIALECT,
	operatorsAliases: env.DATABASE_OPERATORS_ALIASES
};

const production = {
	username: env.MYSQL_USERNAME,
	password: env.MYSQL_PASSWORD,
	database: env.MYSQL_DATABASE,
	host: env.MYSQL_HOST,
	dialect: env.DATABASE_DIALECT,
	operatorsAliases: env.DATABASE_OPERATORS_ALIASES
};

const test = {
	username: env.MYSQL_USERNAME,
	password: env.MYSQL_PASSWORD,
	database: env.MYSQL_DATABASE,
	host: env.MYSQL_HOST,
	dialect: env.DATABASE_DIALECT,
	operatorsAliases: env.DATABASE_OPERATORS_ALIASES
};

module.exports = { development, production, test };