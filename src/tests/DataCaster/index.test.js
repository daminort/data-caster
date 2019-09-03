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

const revertStrings = require('./revertStrings');
const revertNumbers = require('./revertNumbers');
const revertBools = require('./revertBools');
const revertDates = require('./revertDates');
const revertObjects = require('./revertObjects');
const revertArrays = require('./revertArrays');
const revertAny = require('./revertAny');
const revertExcluded = require('./revertExcluded');

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

	describe(revertStrings.name, revertStrings.test);
	describe(revertNumbers.name, revertNumbers.test);
	describe(revertBools.name, revertBools.test);
	describe(revertDates.name, revertDates.test);
	describe(revertObjects.name, revertObjects.test);
	describe(revertArrays.name, revertArrays.test);
	describe(revertAny.name, revertAny.test);
	describe(revertExcluded.name, revertExcluded.test);
});
