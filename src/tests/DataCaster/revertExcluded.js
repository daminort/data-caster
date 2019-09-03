const { DataCaster } = require('../../DataCaster');
const { serverData } = require('./common');

module.exports = {
	name: 'Revert: Excluded',
	test: () => {

		test('Revert: Excluded', () => {
			const dc = new DataCaster()
				.int('user_id')
				.string('user_name')
				.bool('is_active')
				.date('last_visit')
				.exclude('user_id')
				.exclude('last_visit');

			const adapted = dc
				.ignoreExcluded(true)
				.adapt(serverData);

			expect(adapted).toEqual({
				userID    : 1220,
				userName  : 'John Snow',
				isActive  : true,
				lastVisit : null,
			});

			const reverted = dc
				.ignoreExcluded(false)
				.revert(adapted);

			expect(reverted).toEqual({
				user_name  : 'John Snow',
				is_active  : true,
			});
		});
	}
}
