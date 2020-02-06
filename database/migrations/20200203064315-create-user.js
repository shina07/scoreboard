'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		userId: {
			allowNull: false,
			type: Sequelize.STRING(20),
			unique: true
		},
		passwordHash: {
			allowNull: false,
			type: Sequelize.STRING(255)
		},
		lastName: {
			allowNull: false,
			type: Sequelize.STRING(10)
		},
		firstName: {
			allowNull: false,
			type: Sequelize.STRING(10)
		},
		userName: {
			allowNull: false,
			type: Sequelize.STRING(20),
			unique: true
		},
		email: {
			allowNull: false,
			type: Sequelize.STRING(40)
		},
		salt: {
			allowNull: false,
			type: Sequelize.STRING(255)
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};