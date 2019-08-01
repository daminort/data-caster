const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Revert: Booleans',
	test: () => {

		test('String -> Bool (true)', () => {
			const dc = new DataCaster()
				.bool('user_id');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_id: true,
			});
		});

		test('String -> Bool (false)', () => {
			const dc = new DataCaster()
				.bool('role');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				role: false,
			});
		});

		test('Bool -> Bool', () => {
			const dc = new DataCaster()
				.bool('is_active');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				is_active: true,
			});
		});

		test('Number -> Bool', () => {
			const dc = new DataCaster()
				.bool('age');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				age: true,
			});
		});

		test('Null -> Bool', () => {
			const dc = new DataCaster()
				.bool('last_visit');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				last_visit: false,
			});
		});
	}
}
