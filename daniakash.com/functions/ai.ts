import { getEnv } from "../server/env/env";

export const onRequest: PagesFunction = ({ env }) => {
  const { DB_URL } = getEnv(env);

  return new Response("Hello from AI function!");
};
