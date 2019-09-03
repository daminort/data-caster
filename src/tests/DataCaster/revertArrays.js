const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Revert: Arrays',
	test: () => {

		test('String Array', () => {
			const dc = new DataCaster()
				.stringArray('zones');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				zones: ['Winterfell', 'Wall'],
			});
		});

		test('Number Array', () => {
			const dc = new DataCaster()
				.numberArray('stages');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				stages: [12, 15, 23, 56],
			});
		});

		test('Int Array', () => {
			const dc = new DataCaster()
				.intArray('stages');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				stages: [12, 15, 23, 56],
			});
		});

		test('Object Array', () => {
			const dc = new DataCaster()
				.objectArray('friends');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				friends: [
					{ id: 42, name: 'Arya Stark' },
					{ id: 54, name: 'Sansa Stark' },
				],
			});
		});
	}
}
