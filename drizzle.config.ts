import { Config } from "drizzle-kit";

export default {
  schema: ["./server/**/*.schema.ts"],
  dbCredentials: {
    url: "sqlite.db",
  },
  driver: "better-sqlite",
  breakpoints: true,
} satisfies Config;
