import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config()
const knexInstance = knex({
  client: 'postgresql',
  connection: {
    database: process.env.POSTGRESQL_DATABASE,
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
  },  
});

export default knexInstance;