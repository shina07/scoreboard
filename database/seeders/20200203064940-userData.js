'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
		Add altering commands here.
		Return a promise to correctly handle asynchronicity.

		Example:
		return queryInterface.bulkInsert('People', [{
		name: 'John Doe',
		isBetaMember: false
		}], {});
		*/
		return queryInterface.bulkInsert('Users', [{
			userId: 'thatsoo',
			passwordHash: '',
			lastName: '임',
			firstName: '댓수',
			userName: 'Administrator',
			email: 'shina07.dev@gmail.com',
			salt: '',
			createdAt: '2020-02-02 22:22:22',
			updatedAt: '2020-02-02 22:22:22'
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
		Add reverting commands here.
		Return a promise to correctly handle asynchronicity.

		Example:
		return queryInterface.bulkDelete('People', null, {});
		*/
	}
};
