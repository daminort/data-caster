const { DataCaster } = require('../../DataCaster');
const { TYPES } = require('../../constants/types');

const createTest = (type) => () => {
	const dc = new DataCaster();
	expect(typeof dc[type]).toBe('function');
}

module.exports = {
	name: 'Function definitions',
	test: () => {
		Object.keys(TYPES).forEach(type => {
			const testName = `Function definition [${type}]`;
			test(testName, createTest(TYPES[type]));
		});
	},
}
