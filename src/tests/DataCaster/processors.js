const { DataCaster } = require('../../DataCaster');
const { TYPES } = require('../../constants/types');

const empty = () => {};
const processors = [
	'adapter',
	'preAdapter',
	'postAdapter',
	'reverter',
	'preReverter',
	'postReverter',
];

const field = {
	type         : TYPES.string,
	originName   : 'value',
	resultName   : 'value',
	adapter      : null,
	preAdapter   : null,
	postAdapter  : null,
	reverter     : null,
	preReverter  : null,
	postReverter : null,
};

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
	name: 'Processors',
	test: () => {
		processors.forEach(processor => {
			const testName = `Processor [${processor}]`;
			test(testName, createTest(processor));
		});
	}
};
