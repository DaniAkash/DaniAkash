export const ASSET_PREFIX = "https://assets.daniakash.com";

/** Join asset prefix with a path, handling slashes correctly */
export function assetUrl(path: string): string {
  const base = ASSET_PREFIX.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "");
  return `${base}/${cleanPath}`;
}
