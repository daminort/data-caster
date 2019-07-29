const { defaultOptions, PHASE } = require('../constants/dataCaster');
const { TYPES } = require('../constants/types');
const {
	camelCase,
	isArray,
	isFunction,
	isPlainObject,
	toInteger,
	toNumber,
} = require('../libs/lodash');
const { parse } = require('../libs/date-fns');

function DataCaster() {

	this._fields = [];
	this._excludedFields = [];
	this._options = {
		...defaultOptions,
	};

	// Internal API ---------------------------------------------------------------------------------
	this._camelizeName = (originName) => {
		let tempName = originName;
		const hasID = /_id$/.test(originName) || /_Id$/.test(originName);
		if (hasID) {
			tempName = tempName.slice(0, tempName.length - 3);
		}

		return `${camelCase(tempName)}${hasID ? 'ID' : ''}`;
	}

	this._addField = (field) => {
		this._fields.push(field);
	}

	this._createRuleSetter = (type) => {
		return (originName, options = {}) => {
			const {
				resultName   = null,
				adapter      = null,
				preAdapter   = null,
				postAdapter  = null,
				reverter     = null,
				preReverter  = null,
				postReverter = null,
			} = options;

			let realResultName = resultName;
			if (!realResultName) {
				realResultName = this._options.forceCamelCase
					? this._camelizeName(originName)
					: originName;
			}

			this._addField({
				type,
				originName,
				resultName: realResultName,
				adapter,
				preAdapter,
				postAdapter,
				reverter,
				preReverter,
				postReverter,
			});

			return this;
		}
	}

	this._isExcluded = (name) => {
		return this._excludedFields.includes(name);
	}

	// Convertions ----------------------------------------------------------------------------------
	this._toString = (value) => {
		return value ? String(value) : '';
	}

	this._toNumber = (value) => {
		return toNumber(value) || 0;
	}

	this._toInt = (value) => {
		return toInteger(value);
	}

	this._toBool = (value) => {
		return Boolean(value);
	}

	this._toDate = (value) => {
		return value ? parse(value) : null;
	}

	this._toObject = (value) => {
		return isPlainObject(value) ? value : {};
	}

	this._toArray = (value) => {
		return isArray(value) ? value : [];
	}

	this._convertArray = (list, converter) => {
		if (!isArray(list)) {
			return [];
		}

		return list.map(item => converter(item));
	}

	// Processing -----------------------------------------------------------------------------------
	this._processData = (rawObject, phase) => {

		const { ignoreExcluded } = this._options;

		const isAdapting = (phase === PHASE.adapting);
		const sourceName = isAdapting ? 'originName' : 'resultName';
		const targetName = isAdapting ? 'resultName' : 'originName';

		const result = {};
		this._fields.forEach(field => {
			const { type }    = field;
			const originName  = field[sourceName];
			const resultName  = field[targetName];
			let   originValue = rawObject[originName];

			if (!ignoreExcluded && (this._isExcluded(originName) || this._isExcluded(resultName))) {
				return;
			}

			const processor     = isAdapting ? field.adapter     : field.reverter;
			const preProcessor  = isAdapting ? field.preAdapter  : field.preReverter;
			const postProcessor = isAdapting ? field.postAdapter : field.postReverter;

			if (isFunction(preProcessor)) {
				originValue = preProcessor(originValue);
			}
			if (isFunction(processor)) {
				result[resultName] = processor(originValue);
			}

			switch (type) {
				case TYPES.string: {
					result[resultName] = this._toString(originValue);
					break;
				}
				case TYPES.number: {
					result[resultName] = this._toNumber(originValue);
					break;
				}
				case TYPES.int: {
					result[resultName] = this._toInt(originValue);
					break;
				}
				case TYPES.bool: {
					result[resultName] = this._toBool(originValue);
					break;
				}
				case TYPES.date: {
					result[resultName] = this._toDate(originValue);
					break;
				}
				case TYPES.object: {
					result[resultName] = this._toObject(originValue);
					break;
				}
				case TYPES.array: {
					result[resultName] = this._toArray(originValue);
					break;
				}
				case TYPES.stringArray: {
					result[resultName] = this._convertArray(originValue, this._toString);
					break;
				}
				case TYPES.numberArray: {
					result[resultName] = this._convertArray(originValue, this._toNumber);
					break;
				}
				case TYPES.intArray: {
					result[resultName] = this._convertArray(originValue, this._toInt);
					break;
				}
				case TYPES.boolArray: {
					result[resultName] = this._convertArray(originValue, this._toBool);
					break;
				}
				case TYPES.dateArray: {
					result[resultName] = this._convertArray(originValue, this._toDate);
					break;
				}
				case TYPES.objectArray: {
					result[resultName] = this._convertArray(originValue, this._toObject);
					break;
				}
				default:
					result[resultName] = originValue;
			}

			if (isFunction(postProcessor)) {
				result[resultName] = postProcessor(result[resultName]);
			}
		});

		return result;
	}

	// External API ---------------------------------------------------------------------------------
	this.init = (options = {}) => {
		this._fields = [];
		this._excludedFields = [];
		this._options = {
			...defaultOptions,
			...options,
		};

		return this;
	}

	// Excluded fields ------------------------------------------------------------------------------
	this.exclude = (fieldName) => {
		if (!this._excludedFields.includes(fieldName)) {
			this._excludedFields.push(fieldName);
		}

		return this;
	}

	this.include = (fieldName) => {
		this._excludedFields = this._excludedFields.filter(name => name !== fieldName);
		return this;
	}

	this.clearExcluded = () => {
		this._excludedFields = [];
		return this;
	}

	this.ignoreExcluded = (ignore) => {
		this._options.ignoreExcluded = Boolean(ignore);
		return this;
	}

	// Adding rules ---------------------------------------------------------------------------------
	this.string      = this._createRuleSetter(TYPES.string);
	this.number      = this._createRuleSetter(TYPES.number);
	this.int         = this._createRuleSetter(TYPES.int);
	this.bool        = this._createRuleSetter(TYPES.bool);
	this.date        = this._createRuleSetter(TYPES.date);
	this.object      = this._createRuleSetter(TYPES.object);
	this.array       = this._createRuleSetter(TYPES.array);

	this.stringArray = this._createRuleSetter(TYPES.stringArray);
	this.numberArray = this._createRuleSetter(TYPES.numberArray);
	this.intArray    = this._createRuleSetter(TYPES.intArray);
	this.boolArray   = this._createRuleSetter(TYPES.boolArray);
	this.dateArray   = this._createRuleSetter(TYPES.dateArray);
	this.objectArray = this._createRuleSetter(TYPES.objectArray);

	this.any         = this._createRuleSetter(TYPES.any);

	// Adapting: server data -> client data ---------------------------------------------------------
	this.adapt = (rawObject) => {
		return this._processData(rawObject, PHASE.adapting);
	}

	this.adaptList = (rawList) => {
		if (!isArray(rawList)) {
			return [];
		}

		return rawList.map(rawObject => {
			return this.adapt(rawObject);
		});
	}

	// Reverting: client data -> server data --------------------------------------------------------
	this.revert = (rawObject) => {
		return this._processData(rawObject, PHASE.reverting);
	}

	this.revertList = (rawList) => {
		if (!isArray(rawList)) {
			return [];
		}

		return rawList.map(rawObject => {
			return this.revert(rawObject);
		});
	}

	// Tests ----------------------------------------------------------------------------------------
	this.getOptions = () => {
		return this._options;
	}
};

module.exports = {
	DataCaster,
};
