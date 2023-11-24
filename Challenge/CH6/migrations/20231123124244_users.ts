import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.unique(["username", "email"]);
    table.bigIncrements("id").primary();
    table.string("username", 30).notNullable();
    table.string("email", 30).notNullable();
    table.text("password").notNullable();
    table.enum("role", ["ADMIN", "SUPERADMIN"]).notNullable();
    table
      .bigInteger("created_by")
      .notNullable()
      .references("id")
      .inTable("users");
    table
      .bigInteger("updated_by")
      .nullable()
      .references("id")
      .inTable("users");
    table
      .bigInteger("deleted_by")
      .nullable()
      .references("id")
      .inTable("users");
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now(6));
    table.dateTime("updated_at").nullable();
    table.dateTime("deleted_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
