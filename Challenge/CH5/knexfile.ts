import { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: `binarch5`,
      user: `postgres`,
      password: `fairytail71`,
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: `binarch5`,
      user: `postgres`,
      password: `fairytail71`,
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
      database: `binarch5`,
      user: `postgres`,
      password: `fairytail71`,
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
