const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Reverting: Strings',
	test: () => {

		test('String -> String', () => {
			const dc = new DataCaster()
				.string('user_id')
				.string('user_name');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_id   : '1220',
				user_name : 'John Snow',
			});
		});

		test('Bool -> String', () => {
			const dc = new DataCaster()
				.string('is_active');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				is_active: 'true',
			});
		});

		test('Number -> String', () => {
			const dc = new DataCaster()
				.string('age');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				age: '21',
			});
		});

		test('Null -> String', () => {
			const dc = new DataCaster()
				.string('last_visit');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				last_visit: '',
			});
		});
	}
}
