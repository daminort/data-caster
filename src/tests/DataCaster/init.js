const { DataCaster } = require('../../DataCaster');
const { defaultOptions } = require('../../constants/dataCaster');

module.exports = {
	name: 'Initialization',
	test: () => {

		test('Creating', () => {
			const options = new DataCaster().getOptions();
			expect(options).toEqual(defaultOptions);
		});

		test('Initializing by defaults', () => {
			const options = new DataCaster()
			.init()
			.getOptions();
			expect(options).toEqual(defaultOptions);
		});

		test('Initializing by customs', () => {
			const options = new DataCaster()
			.init({
				forceCamelCase: false,
				ignoreExcluded: true,
			})
			.getOptions();

			expect(options).toEqual({
				forceCamelCase: false,
				ignoreExcluded: true,
			});
		});
	}
}
