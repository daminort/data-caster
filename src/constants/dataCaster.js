const defaultOptions = {
	forceCamelCase: true,
	ignoreExcluded: false,
};

const PHASE = Object.freeze({
	adapting  : 'adapting',
	reverting : 'reverting',
});

module.exports = {
	defaultOptions,
	PHASE,
};
