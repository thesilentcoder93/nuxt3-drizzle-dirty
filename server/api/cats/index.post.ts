import { catSchema } from "../../schemas/cats.schema";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);

  const cat = db.insert(catSchema).values(body).returning().all();

  return cat;
});
