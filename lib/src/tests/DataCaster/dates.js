const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Dates',
	test: () => {

		test('String -> Date', () => {
			const res = new DataCaster()
				.date('birthday')
				.adapt(serverData);

			expect(res).toEqual({
				birthday: new Date(1998, 5, 12, 10, 14, 36),
			});
		});

		test('Null -> Bool', () => {
			const res = new DataCaster()
				.date('last_visit')
				.adapt(serverData);

			expect(res.lastVisit instanceof Date).toBeFalsy();
		});
	}
}
