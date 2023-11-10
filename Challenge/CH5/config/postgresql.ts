import knex from 'knex';

const knexInstance = knex({
  client: 'postgresql',
  connection: {
    database: "db_cars_knex",
    user: "postgres",
    password: "fairytail71",
  },  
});

export default knexInstance;