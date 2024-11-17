import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { getEnv } from "../env/env";

dotenv.config({ path: ".dev.vars" });

const env = getEnv(process.env);

const client = postgres(env.DB_URL);

export const db = drizzle(client);
