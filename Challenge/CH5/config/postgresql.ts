import knex from 'knex';

const postgresqlInstance = knex({
  client: 'pg',
  connection: 'postgres://ocgjqqdm:riBTDlvh1M4yYKDwMIlJ_ObFFXi73ni4@rain.db.elephantsql.com/ocgjqqdm',
});

export default postgresqlInstance;