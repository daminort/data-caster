const init = require('./init');
const functionDefinitions = require('./functionDefinitions');
const simpleFields = require('./simpleFields');
const processors = require('./processors');
const excludedFields = require('./excludedFields');

const strings = require('./strings');
const numbers = require('./numbers');
const bools = require('./bools');
const dates = require('./dates');
const objects = require('./objects');
const arrays = require('./arrays');
const any = require('./any');

describe('DataCaster', () => {
	describe(init.name, init.test);
	describe(functionDefinitions.name, functionDefinitions.test);
	describe(simpleFields.name, simpleFields.test);
	describe(processors.name, processors.test);
	describe(excludedFields.name, excludedFields.test);

	describe(strings.name, strings.test);
	describe(numbers.name, numbers.test);
	describe(bools.name, bools.test);
	describe(dates.name, dates.test);
	describe(objects.name, objects.test);
	describe(arrays.name, arrays.test);
	describe(any.name, any.test);
});
