import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
// @ts-ignore
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
export const db: BetterSQLite3Database = drizzle(sqlite);
