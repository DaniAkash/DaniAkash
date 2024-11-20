import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { embeddingModelType } from "./embedding-model";
// @ts-ignore - types not available for this package :(
import { chunkit } from "semantic-chunking";
import type { AIDocumentChunk, AIDocumentType } from "./ai-document-type";

const embeddingModel = openai.embedding(embeddingModelType);

const chunkitOptions = {
  maxTokenSize: 600,
  similarityThreshold: 0.5,
  combineChunks: true,
  logging: true,
};

const generateChunks = async (input: AIDocumentType) => {
  const chunks: AIDocumentChunk[] = await chunkit([input], chunkitOptions);
  return chunks;
};

export const generateEmbeddings = async (
  value: AIDocumentType,
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = await generateChunks(value);
  const chunkText = chunks.map((each) => each.text);
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunkText,
  });
  return embeddings.map((e, i) => ({
    content: chunkText[i] ?? "",
    embedding: e,
  }));
};
