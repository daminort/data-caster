const serverData = {
	user_id    : '1220',
	user_name  : 'John Snow',
	role       : '',
	is_active  : true,
	age        : 21,
	last_visit : null,
	balance    : '116.84',
	birthday   : '1998-06-12T10:14:36',
	died       : '-1',
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
}

module.exports = {
	serverData,
}
