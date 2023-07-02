import { catSchema } from "../../schemas/cats.schema";

export default defineEventHandler(async (e) => {
  return db.select().from(catSchema).all();
});
