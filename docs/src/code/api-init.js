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

export const before =
`{
	id: 1,
	user_name: 'John Snow',
}
`;

export const after =
	`{
	id: 1,
	user_name: 'John Snow',
}
`;
