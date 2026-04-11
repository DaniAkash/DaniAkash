/**
 * Stable entity URI for the Person — used across all schemas to link author references.
 * Intentionally hardcoded to the production origin: this is an entity identifier (not a page URL),
 * so it must remain constant across all environments (preview, staging, production).
 * Derived from the same origin as `site` in astro.config.mjs.
 */
export const PERSON_ENTITY_ID = "https://daniakash.com/#person";

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
