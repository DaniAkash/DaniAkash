/** URL slug for an app's story route, e.g. "Google Rust Style Guide" -> "google-rust-style-guide". */
export const slugify = (value: string) =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const appHref = (name: string) => `/app/${slugify(name)}/`;
