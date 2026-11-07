import type { IconName } from "../components/Icon.astro";

export interface SiteSection {
  title: string;
  href: string;
  glyph: IconName;
  tint: string;
  ink: string;
}

/** The site's own pages, shown as apps in the dock and on page headers. */
export const sections: SiteSection[] = [
  {
    title: "Blog",
    href: "/blog/",
    glyph: "book",
    tint: "#FF5A1F",
    ink: "#FFFFFF",
  },
  {
    title: "Newsletter",
    href: "/newsletter/",
    glyph: "mail",
    tint: "#00A876",
    ink: "#FFFFFF",
  },
  {
    title: "Speaking",
    href: "/speaking/",
    glyph: "mic",
    tint: "#E5357F",
    ink: "#FFFFFF",
  },
  {
    title: "Projects",
    href: "/projects/",
    glyph: "grid",
    tint: "#2E5BFF",
    ink: "#FFFFFF",
  },
  {
    title: "About",
    href: "/about/",
    glyph: "user",
    tint: "#7A5CFF",
    ink: "#FFFFFF",
  },
  {
    title: "Resume",
    href: "/resume/",
    glyph: "file",
    tint: "#5B6474",
    ink: "#FFFFFF",
  },
  {
    title: "Uses",
    href: "/uses/",
    glyph: "laptop",
    tint: "#1C1B22",
    ink: "#FFFFFF",
  },
  {
    title: "Now",
    href: "/now/",
    glyph: "pulse",
    tint: "#FFC21A",
    ink: "#1C1B22",
  },
];

export const sectionFor = (path: string) =>
  sections.find(
    (s) =>
      path.startsWith(s.href) ||
      (s.href === "/blog/" && path.startsWith("/posts/")),
  );
