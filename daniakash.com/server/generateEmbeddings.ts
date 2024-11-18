import { db } from "./db";
import {
  insertResourceSchema,
  resources,
  type NewResourceParams,
} from "./db/schema/resources";
import { embeddings as embeddingsTable } from "./db/schema/embeddings";
import { generateEmbeddings } from "./utils/embedding";

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);
    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();

    if (!resource) throw new Error("Resource not created");

    const embeddings = await generateEmbeddings(content);
    await db.insert(embeddingsTable).values(
      embeddings.map((embedding) => ({
        resourceId: resource.id,
        ...embedding,
      })),
    );

    return "Resource successfully created and embedded.";
  } catch (error) {
    const errorMessage =
      error instanceof Error && error.message.length > 0
        ? error.message
        : `An error occurred while creating the resource`;
    console.error(errorMessage);
    throw error;
  }
};
