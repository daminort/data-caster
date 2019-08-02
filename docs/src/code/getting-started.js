const serverData =
`{
	user_id    : '1220',
	user_name  : 'John Snow',
	role       : '',
	is_active  : true,
	died       : '-1',
	birthday   : '1998-06-12T10:14:36',
	last_visit : null,
	age        : 21,
	balance    : '116.84',
	pos_x      : 33.32547962,
	pos_y      : 68.84637914,
	zones      : ['Winterfell', 'Wall'],
	stages     : [12, 15, 23, 56],
	love: {
		name : 'Daenerys Targaryen',
		age  : '20',
	},
	friends: [
		{ id: 42, name: 'Arya Stark' },
		{ id: 54, name: 'Sansa Stark' },
	],
}`;

export const basicUsageAdapt =
`import { DataCaster } from 'data-caster';

const serverData = ${serverData};

const adapter = new DataCaster()
	.init()
	.int('user_id', { resultName: 'id' })
	.string('user_name', { resultName: 'name' })
	.string('role')
	.bool('is_active')
	.bool('died', {
		adapter: (value) => +value === 1,
	})
	.date('birthday')
	.date('last_visit')
	.int('age')
	.number('balance')
	.int('pos_x')
	.int('pos_y')
	.stringArray('zones')
	.intArray('stages')
	.object('love')
	.objectArray('friends')
	.exclude('last_visit) // for reverting purposes, see example below
	.exclude('pos_x)
	.exclude('pos_y)
	.exclude('zones)
	.exclude('stages)
	.exclude('love)
	.exclude('friends)
	
const adaptUser = (rawData) => adapter
	.ignoreExcluded(true)
	.adapt();
	
const adaptedData = adaptUser(serverData);
`;

export const basicUsageRevert =
`// we need to use the same adapter we have created 
// it the 'Adapt data from server' section above

const revertUser = (data) => adapter
	.ignoreExcluded(false)
	.revert();
	
const revertedData = revertUser(clientData);
`;

export const objectBefore = `${serverData}`;
export const objectAfter =
`{
	id        : 1220,
	name      : 'John Snow',
	role      : '',
	isActive  : true,
	died      : false,
	birthday  : 1998-06-12T10:14:36Z002,
	lastVisit : null,
	age       : 21,
	balance   : 116.84,
	posX      : 33,
	posY      : 68,
	zones     : ['Winterfell', 'Wall'],
	stages    : [12, 15, 23, 56],
	love: {
		name : 'Daenerys Targaryen',
		age  : '20',
	},
	friends: [
		{ id: 42, name: 'Arya Stark' },
		{ id: 54, name: 'Sansa Stark' },
	],
}`;

export const objectAfterRevert =
`{
	user_id    : 1220,
	user_name  : 'John Snow',
	role       : '',
	is_active  : true,
	died       : false,
	birthday   : 1998-06-12T10:14:36Z002,
	// last_visit: omitted because of excluded,
	age        : 21,
	balance    : 116.84,
	// pos_x
	// pos_y
	// zones
	// stages
	// love
	
	
	
	// friends
	
	
}`;
