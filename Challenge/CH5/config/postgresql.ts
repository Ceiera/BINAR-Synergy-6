import knex from 'knex';

const knexInstance = knex({
  client: 'postgresql',
  connection: {
    database: `binarch5`,
    user: `postgres`,
    password: `fairytail71`,
  },  
});

export default knexInstance;