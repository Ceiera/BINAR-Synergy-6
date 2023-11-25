import { Knex } from "knex";
import bcrypt from "bcrypt";
const password = bcrypt.hashSync("12345678", 10);
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      username: "superadmin",
      email: "superadmin@gmail.com",
      password: "12345678",
      role: "SUPERADMIN",
    },
  ]);
}
