export const signature =
`number(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.number('id')
	.string('name')
	.number('age'),
	.number('balance');
	
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
	balance: 100.57,
}
`;
