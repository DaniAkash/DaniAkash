/** Apps pinned to the home screen grid, in order; a pinned app never also sits in a folder. */
export const pinnedApps = [
  "BrowserOS",
  "Agent Terminal",
  "herbie",
  "aalai",
  "Screen Time Overlay",
  "stylecn",
  "Pickyourtrail",
  "Google Rust Style Guide",
  "Coming soon",
] as const;

/** Home screen folders; every unpinned project in the category lives inside. */
export const folders = [
  { id: "folder-earlier", title: "Earlier Work", category: "earlier" },
] as const;

const pinned = new Set<string>(pinnedApps);

export const isPinned = (name: string) => pinned.has(name);

export const folderFor = (project: {
  name: string;
  category?: string | undefined;
}) =>
  isPinned(project.name)
    ? undefined
    : folders.find((folder) => folder.category === project.category);
