const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Numbers',
	test: () => {

		// Number
		test('String -> Number', () => {
			const res = new DataCaster()
				.number('user_id')
				.adapt(serverData);

			expect(res).toEqual({
				userID: 1220,
			});
		});

		test('String -> Number (NaN)', () => {
			const res = new DataCaster()
				.number('user_name')
				.adapt(serverData);

			expect(res).toEqual({
				userName: 0,
			});
		});

		test('Number -> Number', () => {
			const res = new DataCaster()
				.number('age')
				.adapt(serverData);

			expect(res).toEqual({
				age: 21,
			});
		});

		test('Number -> Number (decimal)', () => {
			const res = new DataCaster()
				.number('balance')
				.adapt(serverData);

			expect(res).toEqual({
				balance: 116.84,
			});
		});

		test('String -> Number (negative)', () => {
			const res = new DataCaster()
			.number('died')
			.adapt(serverData);

			expect(res).toEqual({
				died: -1,
			});
		});

		// Int
		test('String -> Int', () => {
			const res = new DataCaster()
			.int('user_id')
			.adapt(serverData);

			expect(res).toEqual({
				userID: 1220,
			});
		});

		test('String -> Int (0)', () => {
			const res = new DataCaster()
			.int('user_name')
			.adapt(serverData);

			expect(res).toEqual({
				userName: 0,
			});
		});

		test('Null -> Int (0)', () => {
			const res = new DataCaster()
				.int('last_visit')
				.adapt(serverData);

			expect(res).toEqual({
				lastVisit: 0,
			});
		});

		test('Number -> Int', () => {
			const res = new DataCaster()
				.int('age')
				.adapt(serverData);

			expect(res).toEqual({
				age: 21,
			});
		});

		test('Number (decimal) -> Int', () => {
			const res = new DataCaster()
				.int('pos_x')
				.int('pos_y')
				.adapt(serverData);

			expect(res).toEqual({
				posX: 33,
				posY: 68,
			});
		});
	}
}
