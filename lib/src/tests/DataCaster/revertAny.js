const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Revert: Any',
	test: () => {

		test('Any', () => {
			const dc = new DataCaster()
				.any('user_id');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_id: '1220',
			});
		});

		test('Any (not defined)', () => {
			const dc = new DataCaster()
				.any('has_crown');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				has_crown: undefined,
			});
		});
	}
}
