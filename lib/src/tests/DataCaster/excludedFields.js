const { DataCaster } = require('../../DataCaster');
const { TYPES } = require('../../constants/types');

const id       = 'id';
const name     = 'name';
const isActive = 'isActive';
const hash     = 'hash';

const createTest = (processor) => () => {
	const dc = new DataCaster();
	const fields = dc
		.string('value', {
			[processor]: empty,
		})
		.getFields();

	expect(fields[0]).toEqual({
		...field,
		[processor]: empty,
	})
}

module.exports = {
	name: 'Excluded fields',
	test: () => {

		const dc = new DataCaster();

		test(`Adding field: [${id}]`, () => {
			const fields = dc
				.exclude(id)
				.getExcludedFields();

			const expected = [id];
			expect(fields).toEqual(expect.arrayContaining(expected));
		});

		test(`Adding field: [${name}]`, () => {
			const fields = dc
				.exclude(name)
				.getExcludedFields();

			const expected = [id, name];
			expect(fields).toEqual(expect.arrayContaining(expected));
		});

		test(`Adding field: [${isActive}]`, () => {
			const fields = dc
				.exclude(isActive)
				.getExcludedFields();

			const expected = [id, name, isActive];
			expect(fields).toEqual(expect.arrayContaining(expected));
		});

		test(`Adding field: [${hash}]`, () => {
			const fields = dc
				.exclude(hash)
				.getExcludedFields();

			const expected = [id, name, isActive, hash];
			expect(fields).toEqual(expect.arrayContaining(expected));
		});

		test(`Removing field: [${name}]`, () => {
			const fields = dc
				.include(name)
				.getExcludedFields();

			const expected = [name];
			expect(fields).toEqual(expect.not.arrayContaining(expected));
		});

		test(`Removing field: [${hash}]`, () => {
			const fields = dc
				.include(hash)
				.getExcludedFields();

			const expected = [hash];
			expect(fields).toEqual(expect.not.arrayContaining(expected));
		});
	}
};
