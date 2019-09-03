const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Arrays',
	test: () => {

		test('String Array', () => {
			const res = new DataCaster()
				.stringArray('zones')
				.adapt(serverData);

			expect(res).toEqual({
				zones: ['Winterfell', 'Wall'],
			});
		});

		test('Number Array', () => {
			const res = new DataCaster()
				.numberArray('stages')
				.adapt(serverData);

			expect(res).toEqual({
				stages: [12, 15, 23, 56],
			});
		});

		test('Int Array', () => {
			const res = new DataCaster()
				.intArray('stages')
				.adapt(serverData);

			expect(res).toEqual({
				stages: [12, 15, 23, 56],
			});
		});

		test('Object Array', () => {
			const res = new DataCaster()
				.objectArray('friends')
				.adapt(serverData);

			expect(res).toEqual({
				friends: [
					{ id: 42, name: 'Arya Stark' },
					{ id: 54, name: 'Sansa Stark' },
				],
			});
		});
	}
}
