/** Home screen folders; every project in the category lives inside. */
export const folders = [
  { id: "folder-ai-tools", title: "AI Tools", category: "ai-tool" },
  { id: "folder-open-source", title: "Open Source", category: "oss" },
  { id: "folder-earlier", title: "Earlier Work", category: "earlier" },
] as const;

export const folderFor = (category: string | undefined) =>
  folders.find((folder) => folder.category === category);
