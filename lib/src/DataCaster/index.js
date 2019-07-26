const { defaultOptions } = require('../constants/dataCaster');
const { TYPES } = require('../constants/types');

function DataCaster() {

	this._fields = [];
	this._options = {
		...defaultOptions,
	};

	// Internal API ---------------------------------------------------------------------------------
	this._clearFields = () => {
		this._fields = [];
	}

	// External API ---------------------------------------------------------------------------------
	this.init = (options = {}) => {
		this._clearFields();
		this._options = {
			...defaultOptions,
		};

		return this;
	}

	// Tests ----------------------------------------------------------------------------------------
	this.getOptions = () => {
		return this._options;
	}
};

module.exports = {
	DataCaster,
};
