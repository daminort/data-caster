const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Objects',
	test: () => {

		test('String -> Object', () => {
			const res = new DataCaster()
				.object('user_id')
				.adapt(serverData);

			expect(res).toEqual({
				userID: {},
			});
		});

		test('Null -> Object', () => {
			const res = new DataCaster()
				.object('last_visit')
				.adapt(serverData);

			expect(res).toEqual({
				lastVisit: {},
			});
		});

		test('Array -> Object', () => {
			const res = new DataCaster()
				.object('friends')
				.adapt(serverData);

			expect(res).toEqual({
				friends: {},
			});
		});

		test('Object -> Object', () => {
			const res = new DataCaster()
				.object('love')
				.adapt(serverData);

			expect(res).toEqual({
				love: {
					name : 'Daenerys Targaryen',
					age  : '20',
				},
			});
		});
	}
}
