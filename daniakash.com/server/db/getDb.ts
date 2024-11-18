import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const getDb = (dbUrl: string) => {
  const client = postgres(dbUrl);
  return drizzle(client);
};
