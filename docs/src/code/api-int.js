export const signature =
`int(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.int('age'),
	.int('balance');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	age: '25',
	balance: '100.57',
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	age: 25,
	balance: 100,
}
`;
