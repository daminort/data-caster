const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Strings',
	test: () => {

		test('String -> String', () => {
			const res = new DataCaster()
				.string('user_id')
				.string('user_name')
				.adapt(serverData);

			expect(res).toEqual({
				userID   : '1220',
				userName : 'John Snow',
			});
		});

		test('Bool -> String', () => {
			const res = new DataCaster()
				.string('is_active')
				.adapt(serverData);

			expect(res).toEqual({
				isActive: 'true',
			});
		});

		test('Number -> String', () => {
			const res = new DataCaster()
				.string('age')
				.adapt(serverData);

			expect(res).toEqual({
				age: '21',
			});
		});

		test('Null -> String', () => {
			const res = new DataCaster()
				.string('last_visit')
				.adapt(serverData);

			expect(res).toEqual({
				lastVisit: '',
			});
		});
	}
}
