import { InferModel, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const catSchema = sqliteTable("cats", {
  id: integer("id").primaryKey(),
  name: text("name"),
  breed: text("breed"),
  age: integer("age"),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});

export type Cat = InferModel<typeof catSchema>; // return type when queried
export type InsertCat = InferModel<typeof catSchema, "insert">; // insert type
