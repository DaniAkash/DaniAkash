import { defineCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import rssToJson from "rss-to-json";
import { NEWSLETTER_RSS } from "./constants/newsletter-rss";
import { getDateDisplay } from "./utils/getDateDisplay";
import { getDateValue } from "./utils/getDateValue";

const { parse } = rssToJson as unknown as { parse: typeof rssToJson };

const readJson = async <T>(path: string): Promise<T> => {
  const file = await readFile(new URL(path, import.meta.url), "utf-8");
  return JSON.parse(file) as T;
};

const career = defineCollection({
  loader: async () => [
    {
      id: "experience",
      items: await readJson("./content/career/experience.json"),
    },
  ],
  schema: z.object({
    items: z.array(
      z.object({
        company: z.string(),
        role: z.string(),
        employmentType: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        location: z.string(),
        description: z.string(),
        logo: z.string(),
      }),
    ),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    tags: z.array(z.string()).max(9),
    canonical: z.string().optional(),
  }),
});

const speaking = defineCollection({
  loader: async () => {
    const events = await readJson<
      {
        year: number;
        events: {
          date: string;
          name: string;
          title: string;
          description: string;
          cta?: { title: string; url: string }[];
          thumbnail?: string;
          video?: string;
        }[];
      }[]
    >("./content/speaking/events.json");

    return events.map((eventGroup) => ({
      id: String(eventGroup.year),
      ...eventGroup,
    }));
  },
  schema: z.object({
    year: z.number(),
    events: z.array(
      z.object({
        date: z.string(),
        name: z.string(),
        title: z.string(),
        description: z.string(),
        cta: z
          .array(
            z.object({
              title: z.string(),
              url: z.string(),
            }),
          )
          .optional(),
        thumbnail: z.string().optional(),
        video: z.string().optional(),
      }),
    ),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/about" }),
});

const social = defineCollection({
  loader: async () => [
    {
      id: "social",
      ...(await readJson("./content/social/social.json")),
    },
  ],
  schema: z.object({
    twitter: z.string(),
    instagram: z.string(),
    github: z.string(),
    linkedIn: z.string(),
    email: z.string(),
    bluesky: z.string(),
  }),
});

const project = defineCollection({
  loader: async () => [
    {
      id: "projects",
      items: await readJson("./content/project/projects.json"),
    },
  ],
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        status: z.enum(["active", "oss", "previous"]).optional(),
        tech: z.array(z.string()).optional(),
        link: z
          .object({
            href: z.string(),
            label: z.string(),
          })
          .optional(),
        size: z
          .enum(["1", "2col", "3col", "full", "stat"])
          .default("1"),
        stat: z
          .object({
            number: z.string(),
            label: z.string(),
          })
          .optional(),
      }),
    ),
  }),
});

const uses = defineCollection({
  loader: async () => [
    {
      id: "uses",
      items: await readJson("./content/uses/uses.json"),
    },
  ],
  schema: z.object({
    items: z.array(
      z.object({
        title: z.string(),
        variant: z.enum(["hardware", "software"]).default("software"),
        tools: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            tag: z.string().optional(),
            image: z.string().optional(),
            link: z.string().optional(),
            size: z.enum(["wide", "square", "small"]).default("square"),
          }),
        ),
      }),
    ),
  }),
});

const rss = defineCollection({
  loader: async () => {
    const feed = await parse(NEWSLETTER_RSS);
    return feed.items.map((item) => {
      const dateValue = getDateValue(item.published);
      const dateDisplay = getDateDisplay(item.published);
      const urlObject = new URL(item.link);
      const slug = urlObject.pathname.split("/").filter(Boolean).pop()!;

      return {
        id: slug,
        title: item.title,
        description: item.description,
        dateValue,
        dateDisplay,
        slug,
        canonical: item.link,
        dateMillis: item.published,
      };
    });
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateValue: z.string(),
    dateDisplay: z.string(),
    slug: z.string(),
    canonical: z.string(),
    dateMillis: z.number(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/now" }),
});

const resume = defineCollection({
  loader: async () => [
    {
      id: "resume",
      ...(await readJson("./content/resume/resume.json")),
    },
  ],
  schema: z.object({
    tagline: z.string(),
    about: z.array(z.string()),
    skills: z.array(
      z.object({
        label: z.string(),
        text: z.string(),
      }),
    ),
    jobs: z.array(
      z.object({
        title: z.string(),
        duration: z.string(),
        description: z.string().optional(),
        contributions: z.array(z.string()),
      }),
    ),
    community: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
    education: z.object({
      school: z.string(),
      degree: z.string(),
      description: z.string(),
    }),
  }),
});

export const collections = {
  career,
  blog,
  speaking,
  about,
  social,
  project,
  uses,
  rss,
  now,
  resume,
};
