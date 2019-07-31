const init = require('./init');
const functionDefinitions = require('./functionDefinitions');
const simpleFields = require('./simpleFields');
const processors = require('./processors');
const excludedFields = require('./excludedFields');

describe(init.name, init.test);
describe(functionDefinitions.name, functionDefinitions.test);
describe(simpleFields.name, simpleFields.test);
describe(processors.name, processors.test);
describe(excludedFields.name, excludedFields.test);
