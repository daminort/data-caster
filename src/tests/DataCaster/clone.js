const { DataCaster } = require('../../DataCaster');
const { isEqual } = require('../../libs/lodash');
const { serverData } = require('./common');

module.exports = {
	name: 'Clone',
	test: () => {

		test('Clone is not the same', () => {
			const source = new DataCaster();
			const clone = source.clone();

			expect(source === clone).toBeFalsy();
		});

		test('Clone has the same options', () => {
			const source = new DataCaster().init({
				forceCamelCase: false,
				ignoreExcluded: true,
			});
			const clone = source.clone();

			const sourceOptions = source.getOptions();
			const cloneOptions = clone.getOptions();

			expect(isEqual(sourceOptions, cloneOptions)).toBeTruthy();
		});

		test('Clone has the same fields', () => {
			const source = new DataCaster()
				.int('id')
				.string('name')
				.bool('is_active', {
					resultName: 'active',
					adapter: (value) => Boolean(+value),
					reverter: (value) => value ? '1' : '0',
				});
			const clone = source.clone();

			const sourceFields = source.getFields();
			const cloneFields = clone.getFields();

			expect(isEqual(sourceFields, cloneFields)).toBeTruthy();
		});

		test('Clone has the same excluded fields', () => {
			const source = new DataCaster()
				.int('id')
				.string('name')
				.date('createdAt')
				.date('updatedAt')
				.exclude('createdAt')
				.exclude('updatedAt');
			const clone = source.clone();

			const sourceFields = source.getExcludedFields();
			const cloneFields = clone.getExcludedFields();

			expect(isEqual(sourceFields, cloneFields)).toBeTruthy();
		});

		test('Clone is capable to work', () => {
			const source = new DataCaster()
				.int('id')
				.string('name')
				.number('user_balance')
				.bool('is_active');
			const clone = source.clone();

			const input = {
				id: '1',
				name: 'John Snow',
				user_balance: '120.14',
				is_active: 1,
			};
			const output = {
				id: 1,
				name: 'John Snow',
				userBalance: 120.14,
				isActive: true,
			};

			const adapted = clone.adapt(input);
			expect(isEqual(adapted, output)).toBeTruthy();
		});
	}
}
