import { object, parse, string, type InferOutput } from "valibot";

const envSchema = object({
  DB_URL: string(),
});

export type ENV = InferOutput<typeof envSchema>;

export const getEnv = (env: unknown) => parse(envSchema, env);
