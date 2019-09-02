export const signature =
`bool(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.bool('is_active');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	is_active: 1,
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	isActive: true,
}
`;
