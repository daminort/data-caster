# data-caster
A tool for cast and coerce data from one format to another

### Installation

```shell script
$ npm install --save @daminort/data-caster
```

### Basic usage

```javascript
import { DataCaster } from 'data-caster;

const serverData = {
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
};

const dc = new DataCaster()
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
  .objectArray('friends');
	
const adaptUser = (rawData) => adapter
  .ignoreExcluded(true)
  .adapt();
	
const adaptedData = adaptUser(serverData);

// We will get:
// {
//   id        : 1220,
//   name      : 'John Snow',
//   role      : '',
//   isActive  : true,
//   died      : false,
//   birthday  : 1998-06-12T10:14:36Z002,
//   lastVisit : null,
//   age       : 21,
//   balance   : 116.84,
//   posX      : 33,
//   posY      : 68,
//   zones     : ['Winterfell', 'Wall'],
//   stages    : [12, 15, 23, 56],
//   love: {
//     name : 'Daenerys Targaryen',
//     age  : '20',
//   },
//   friends: [
//     { id: 42, name: 'Arya Stark' },
//     { id: 54, name: 'Sansa Stark' },
//   ],
// }
```

For more information and examples, please, visit to [Documentation page](https://github.com/daminort/data-caster)
