const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Reverting: Numbers',
	test: () => {

		// Number
		test('String -> Number', () => {
			const dc = new DataCaster()
				.number('user_id');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_id: 1220,
			});
		});

		test('String -> Number (NaN)', () => {
			const dc = new DataCaster()
				.number('user_name');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_name: 0,
			});
		});

		test('Number -> Number', () => {
			const dc = new DataCaster()
				.number('age');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				age: 21,
			});
		});

		test('Number -> Number (decimal)', () => {
			const dc = new DataCaster()
				.number('balance');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				balance: 116.84,
			});
		});

		test('String -> Number (negative)', () => {
			const dc = new DataCaster()
				.number('died');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				died: -1,
			});
		});

		// Int
		test('String -> Int', () => {
			const dc = new DataCaster()
				.int('user_id');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_id: 1220,
			});
		});

		test('String -> Int (0)', () => {
			const dc = new DataCaster()
				.int('user_name');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_name: 0,
			});
		});

		test('Null -> Int (0)', () => {
			const dc = new DataCaster()
				.int('last_visit');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				last_visit: 0,
			});
		});

		test('Number -> Int', () => {
			const dc = new DataCaster()
				.int('age');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				age: 21,
			});
		});

		test('Number (decimal) -> Int', () => {
			const dc = new DataCaster()
				.int('pos_x')
				.int('pos_y');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				pos_x: 33,
				pos_y: 68,
			});
		});
	}
}
