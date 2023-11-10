import { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: `${process.env.POSTGRESQL_URI}`,
  },

  staging: {
    client: "postgresql",
    connection: `${process.env.POSTGRESQL_URI}`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: `${process.env.POSTGRESQL_URI}`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
