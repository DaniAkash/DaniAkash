/** Canonical site URL — single source of truth, also used by astro.config.mjs */
export const SITE_URL = "https://daniakash.com";

/** Stable entity URI for the Person — used across all schemas to link author references */
export const PERSON_ENTITY_ID = `${SITE_URL}/#person`;

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
};
