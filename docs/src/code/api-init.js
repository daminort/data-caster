export const signature =
`init(options = {})
`;

export const options =
`const defaultOptions = {
	forceCamelCase: true,  // transform object's properties into 'camelCase'-notation
	ignoreExcluded: false, // allowing temporarily switch off and on using excluded fields
};
`;

export const example =
`const dc = new DataCaster()
	.init({
		forceCamelCase: false,
	})
	.int('id')
	.string('name');
	
const result = dc.adapt(serverObject);
`;
