const { DataCaster } = require('../../DataCaster');
const { TYPES } = require('../../constants/types');

const field = {
	type         : null,
	originName   : 'value',
	resultName   : 'value',
	adapter      : null,
	preAdapter   : null,
	postAdapter  : null,
	reverter     : null,
	preReverter  : null,
	postReverter : null,
};

const createTest = (type) => () => {
	const dc = new DataCaster();
	const fields = dc[type]('value').getFields();
	expect(fields[0]).toEqual({
		...field,
		type,
	});
}

module.exports = {
	name: 'Simple fields',
	test: () => {
		Object.keys(TYPES).forEach(type => {
			const testName = `Simple [${type}]`;
			test(testName, createTest(TYPES[type]));
		});
	}
}
