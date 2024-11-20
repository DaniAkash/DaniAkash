import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { embeddingModelType } from "./embedding-model";

const embeddingModel = openai.embedding(embeddingModelType);

const cleanHtml = (input: string) => {
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&[^;\s]+;/g, "") // Remove HTML entities (e.g., &amp;)
    .trim();
};

const blockTags = [
  "p",
  "div",
  "section",
  "article",
  "blockquote",
  "li",
  "ul",
  "ol",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "table",
  "tr",
  "td",
];

const generateChunks = (input: string) => {
  const blockRegex = new RegExp(`</(?:${blockTags.join("|")})>`, "gi");

  return input
    .split(blockRegex) // Split by paragraph, list item, or header boundaries
    .map(cleanHtml) // Remove HTML tags and entities
    .flatMap((chunk) => chunk.split(/(?<=[.?!])\s+/)) // Split further by sentence endings
    .filter((chunk) => chunk.length > 0); // Remove empty chunks
};

export const generateEmbeddings = async (
  value: string,
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = generateChunks(value);
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks,
  });
  return embeddings.map((e, i) => ({ content: chunks[i] ?? "", embedding: e }));
};
