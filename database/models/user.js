'use strict';
module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define('user', {
		userId: {
			allowNull: false,
			type: DataTypes.STRING(20),
			unique: true
		},
		passwordHash: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		lastName: {
			allowNull: false,
			type: DataTypes.STRING(10)
		},
		firstName: {
			allowNull: false,
			type: DataTypes.STRING(10)
		},
		userName: {
			allowNull: false,
			type: DataTypes.STRING(20),
			unique: true
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING(40)
		},
		salt: {
			allowNull: false,
			type: DataTypes.STRING(255)
		}
	}, {});
	user.associate = function(models) {
	// associations can be defined here
	};
	return user;
};