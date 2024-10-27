import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      employmentType: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      location: z.string(),
      description: z.string(),
    }),
  ),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

const eventsCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      year: z.number(),
      events: z.array(
        z.object({
          date: z.string(),
          name: z.string(),
          title: z.string(),
          description: z.string(),
          cta: z.optional(
            z.array(
              z.object({
                title: z.string(),
                url: z.string(),
              }),
            ),
          ),
          video: z.optional(z.string()),
        }),
      ),
    }),
  ),
});

const aboutCollection = defineCollection({
  type: "content",
});

export const collections = {
  career: experienceCollection,
  blog: blogCollection,
  speaking: eventsCollection,
  about: aboutCollection,
};
