const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Booleans',
	test: () => {

		test('String -> Bool (true)', () => {
			const res = new DataCaster()
				.bool('user_id')
				.adapt(serverData);

			expect(res).toEqual({
				userID: true,
			});
		});

		test('String -> Bool (false)', () => {
			const res = new DataCaster()
				.bool('role')
				.adapt(serverData);

			expect(res).toEqual({
				role: false,
			});
		});

		test('Bool -> Bool', () => {
			const res = new DataCaster()
				.bool('is_active')
				.adapt(serverData);

			expect(res).toEqual({
				isActive: true,
			});
		});

		test('Number -> Bool', () => {
			const res = new DataCaster()
				.bool('age')
				.adapt(serverData);

			expect(res).toEqual({
				age: true,
			});
		});

		test('Null -> Bool', () => {
			const res = new DataCaster()
				.bool('last_visit')
				.adapt(serverData);

			expect(res).toEqual({
				lastVisit: false,
			});
		});
	}
}
