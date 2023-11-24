import { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRESQL_DATABASE,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRESQL_DATABASE,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRESQL_DATABASE,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
