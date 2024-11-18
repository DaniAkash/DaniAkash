import { embed } from "ai";
import { embeddings } from "./db/schema/embeddings";
import { cosineDistance, desc, gt, sql } from "drizzle-orm";
import { createOpenAI } from "@ai-sdk/openai";
import { getDb } from "./db/getDb";
import { embeddingModelType } from "./utils/embedding-model";

const generateEmbedding = async ({
  value,
  apiKey,
}: {
  value: string;
  apiKey: string;
}): Promise<number[]> => {
  const openai = createOpenAI({
    compatibility: "strict",
    apiKey,
  });
  const input = value.replaceAll("\\n", " ");
  const embeddingModel = openai.embedding(embeddingModelType);
  const { embedding } = await embed({
    model: embeddingModel,
    value: input,
  });
  return embedding;
};

export const findRelevantContent = async ({
  userQuery,
  dbUrl,
  apiKey,
}: {
  userQuery: string;
  dbUrl: string;
  apiKey: string;
}) => {
  const userQueryEmbedded = await generateEmbedding({
    value: userQuery,
    apiKey,
  });
  const similarity = sql<number>`1 - (${cosineDistance(
    embeddings.embedding,
    userQueryEmbedded,
  )})`;
  const db = getDb(dbUrl);
  const similarGuides = await db
    .select({ name: embeddings.content, similarity })
    .from(embeddings)
    .where(gt(similarity, 0.5))
    .orderBy((t) => desc(t.similarity))
    .limit(4);
  return similarGuides;
};
