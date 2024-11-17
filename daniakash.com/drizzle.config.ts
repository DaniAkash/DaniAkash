import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
import { getEnv } from "./server/env/env";

dotenv.config({ path: ".dev.vars" });

const env = getEnv(process.env);

export default {
  schema: "./server/db/schema",
  dialect: "postgresql",
  out: "./server/db/migrations",
  dbCredentials: {
    url: env.DB_URL,
  },
} satisfies Config;
