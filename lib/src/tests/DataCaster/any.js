const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Any',
	test: () => {

		test('Any', () => {
			const res = new DataCaster()
				.any('user_id')
				.adapt(serverData);

			expect(res).toEqual({
				userID: '1220',
			});
		});

		test('Any (not defined)', () => {
			const res = new DataCaster()
				.any('has_crown')
				.adapt(serverData);

			expect(res).toEqual({
				hasCrown: undefined,
			});
		});
	}
}
