import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.bigIncrements("id").primary();
    table.string("name", 30).notNullable();
    table.bigInteger("cost_per_day").notNullable();
    table.enum("size", ["S", "M", "L"]).notNullable();
    table.text("car_picture_url").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
