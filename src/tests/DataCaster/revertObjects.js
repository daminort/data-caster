const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Revert: Objects',
	test: () => {

		test('String -> Object', () => {
			const dc = new DataCaster()
				.object('user_id');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				user_id: {},
			});
		});

		test('Null -> Object', () => {
			const dc = new DataCaster()
				.object('last_visit');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				last_visit: {},
			});
		});

		test('Array -> Object', () => {
			const dc = new DataCaster()
				.object('friends');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				friends: {},
			});
		});

		test('Object -> Object', () => {
			const dc = new DataCaster()
				.object('love');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				love: {
					name : 'Daenerys Targaryen',
					age  : '20',
				},
			});
		});
	}
}
