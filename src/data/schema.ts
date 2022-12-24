import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'locations',
      columns: [
        {name: 'location_id', type: 'number'},
        {name: 'name', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'dimension', type: 'string'},
        {name: 'residents_number', type: 'number'},
        {name: 'url', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'characters',
      columns: [
        {name: 'character_id', type: 'number'},
        {name: 'name', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'species', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'origin', type: 'string'},
        {name: 'location', type: 'string'},
        {name: 'image', type: 'string'},
      ],
    }),
  ],
});
