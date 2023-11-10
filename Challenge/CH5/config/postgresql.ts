import knex from 'knex';

const postgresqlInstance = knex({
  client: 'pg',
  connection: process.env.POSTGRESQL_URI,
});

export default postgresqlInstance;