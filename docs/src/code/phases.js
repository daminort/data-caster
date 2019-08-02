export const adaptPhase =
`const serverObject = {
	id: '1220',
	name: 'John Snow',
};
const serverList = [
	{ id: '1220', name: 'John Snow' },
	{ id: '1330', name: 'Arya Stark' },
	{ id: '1440', name: 'Sansa Stark' },
];

const dc = new DataCaster()
	.int('id')
	.string('name');
	
const single = dc.adapt(serverObject);
const list = dc.adaptList(serverList);
`;

export const revertPhase =
`// We took DataCaster instance and data from our earlier example above
const revertedSingle = dc.revert(single);
const revertedList = dc.revertList(list);
`;
