import { z, defineCollection } from "astro:content";
import rssToJson from "rss-to-json";
import { NEWSLETTER_RSS } from "../constants/newsletter-rss";
import { getDateValue } from "../utils/getDateValue";
import { getDateDisplay } from "../utils/getDateDisplay";
const { parse } = rssToJson as unknown as { parse: typeof rssToJson };

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
      logo: z.string(),
    }),
  ),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    tags: z.array(z.string()).max(9),
    canonical: z.string(),
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

const socialCollection = defineCollection({
  type: "data",
  schema: z.object({
    twitter: z.string(),
    instagram: z.string(),
    github: z.string(),
    linkedIn: z.string(),
    email: z.string(),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      info: z.optional(z.string()),
      link: z.object({
        href: z.string(),
        label: z.string(),
      }),
      logo: z.string(),
      noBg: z.optional(z.boolean()),
    }),
  ),
});

const usesCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      tools: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
  ),
});

const rssCollection = defineCollection({
  loader: async () => {
    const rss = await parse(NEWSLETTER_RSS);
    return rss.items.map((each) => {
      const dateValue = getDateValue(each.published);
      const dateDisplay = getDateDisplay(each.published);
      const urlObject = new URL(each.link);
      const slug = urlObject.pathname.split("/").filter(Boolean).pop()!;
      return {
        id: slug,
        title: each.title,
        description: each.description,
        dateValue,
        dateDisplay,
        slug,
        canonical: each.link,
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
  }),
});

const nowCollection = defineCollection({
  type: "content",
});

export const collections = {
  career: experienceCollection,
  blog: blogCollection,
  speaking: eventsCollection,
  about: aboutCollection,
  social: socialCollection,
  project: projectsCollection,
  uses: usesCollection,
  rss: rssCollection,
  now: nowCollection,
};
