const { DataCaster } = require('../../DataCaster');
const { format } = require('../../libs/date-fns');
const { serverData } = require('./common');

const reverter = (value) => {
	if (!(value instanceof Date)) {
		return '';
	}
	return format(value, 'YYYY-MM-DD HH:mm:ss');
}

module.exports = {
	name: 'Revert: Dates',
	test: () => {

		test('String -> Date', () => {
			const dc = new DataCaster()
				.date('birthday');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				birthday: new Date(1998, 5, 12, 10, 14, 36),
			});
		});

		test('String -> Date -> String', () => {
			const dc = new DataCaster()
				.date('birthday', { reverter });

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				birthday: '1998-06-12 10:14:36',
			});
		});

		test('Null -> Date', () => {
			const dc = new DataCaster()
				.date('last_visit');

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted.last_visit instanceof Date).toBeFalsy();
		});

		test('Null -> Date -> String', () => {
			const dc = new DataCaster()
				.date('last_visit', { reverter });

			const adapted  = dc.adapt(serverData);
			const reverted = dc.revert(adapted);

			expect(reverted).toEqual({
				last_visit: '',
			});
		});
	}
}
