import type { Book } from "schema-dts";

/** Canonical site URL — single source of truth, also used by astro.config.mjs */
export const SITE_URL = "https://daniakash.com";

/** Stable entity URI for the Person — used across all schemas to link author references */
export const PERSON_ENTITY_ID = `${SITE_URL}/#person`;

/** Mirrors the Google Books record the Knowledge Panel is built from, so the two entities reconcile. */
export const AUTHORED_BOOK: Book = {
  "@type": "Book",
  "@id": `${SITE_URL}/#book-javascript-by-example`,
  name: "JavaScript by Example",
  author: { "@id": PERSON_ENTITY_ID },
  publisher: { "@type": "Organization", name: "Packt Publishing" },
  datePublished: "2017-08-30",
  isbn: "9781788299008",
  numberOfPages: 298,
  inLanguage: "en",
  sameAs: [
    "https://books.google.com/books?id=WJZGDwAAQBAJ",
    "https://www.oreilly.com/library/view/javascript-by-example/9781788293969/",
  ],
};

/** The project entry whose story page describes the book. */
export const AUTHORED_BOOK_PROJECT = "JavaScript by Example Book";

export const FALLBACK_DESCRIPTION =
  "Dani Akash | AI Engineer, speaker, and open source contributor. Writing about AI, JavaScript, React Native, and the modern web.";

export const SEGMENT_LABELS: Record<string, string> = {
  about: "About",
  blog: "Blog",
  posts: "Blog",
  newsletter: "Newsletter",
  projects: "Projects",
  speaking: "Speaking",
  uses: "Uses",
  now: "Now",
  resume: "Resume",
  app: "Projects",
};

/** Sections whose detail pages live under a different first path segment than their list. */
export const SEGMENT_PARENTS: Record<string, string> = {
  posts: "/blog/",
  app: "/projects/",
};
