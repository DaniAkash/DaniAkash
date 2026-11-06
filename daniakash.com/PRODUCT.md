# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: developers and AI builders who arrive from a blog post, a talk, a GitHub repo, or a social post. They are curious engineers sizing up who Dani is, what he builds, and whether his writing and tools are worth following. Secondary (confirmed as lower priority): founders, recruiters, and event organisers checking credibility via /resume and /speaking.

## Product Purpose

daniakash.com is Dani Akash's personal site: a home for his work (projects, talks), writing (blog posts, newsletter archive), and personality (about, uses, now). Success means a developer visitor leaves understanding what Dani builds today (BrowserOS, agent tooling, open source) and goes deeper into the work.

## Positioning

An AI engineer who builds agent infrastructure (BrowserOS, skills) with a long open-source and community-speaking track record (React Native libraries, 29 talks since 2017), and who is unapologetically playful outside the code: games, anime, worldbuilding, cosplay, cats, travel.

## Operating Context

Static Astro 7 site, deployed to daniakash.com. Content lives in `src/content/` as MDX (blog, about, now) and JSON (projects, speaking, career, resume, uses, social, destinations). Newsletter issues are pulled at build time from the Buttondown RSS feed. Images are served from `https://assets.daniakash.com`.

## Capabilities and Constraints

- **URLs are SEO-binding and must not change:** `/`, `/about/`, `/blog/`, `/posts/<slug>/`, `/newsletter/`, `/newsletter/<slug>/`, `/projects/`, `/speaking/`, `/uses/`, `/now/`, `/resume/`, `/rss.xml`, `/sitemap-index.xml`, plus the `/blog/<slug>` to `/posts/<slug>` redirect.
- **SEO plumbing must survive:** per-page titles and descriptions, canonical links, generated OG images, BreadcrumbList / WebSite / Person JSON-LD, RSS, sitemap, robots.txt with AI-bot allowances.
- **Content is preserved:** page copy, posts, newsletter issues, project, talk, and uses data stay as they are; the redesign changes presentation, not facts.
- Stack is fixed: Astro 7, Tailwind 4, React islands only where interaction needs them, pnpm.

## Brand Commitments

- The `dani_akash_` handle is the site wordmark.
- The five candid personal photos (cosplay fight stance, coding with cat, speaking at a meetup, river gorge hike, market sculpture) stay as a homepage feature.
- The interactive destinations globe (65 places, cobe) stays on /about.
- Both light and dark themes ship, user-switchable.
- Standing preference: familiar developer-portfolio patterns (bento grids, sidebars, minimal indexes) over metaphor-driven visual worlds; trading cards, manga and other costume worlds were explicitly rejected.
- Voice: first person, casual, self-deprecating, curious ("A simple developer building AI agents for humans.").

## Evidence on Hand

- 16 blog posts (`src/content/blog/`), ~10 newsletter issues (Buttondown RSS).
- 29 talks across 2017 to 2026 (`src/content/speaking/events.json`) with thumbnails and videos.
- Project stats in `src/content/project/projects.json` (473+ GitHub stars, 166 public repos, 10+ libraries, 7+ years shipping).
- Career history with company logos (`src/content/career/experience.json`), resume data, uses inventory with hardware images, destinations data with images.
- No testimonials or press quotes exist; do not invent any.

## Product Principles

1. **The work leads.** Every page should route a curious developer toward what Dani builds and has built.
2. **Personality is a feature, not decoration.** The games, anime, travel, and cat are real and belong on the page alongside the engineering.
3. **Never break a link.** Every existing URL, feed, and structured-data entity keeps working.
4. **Content is the asset.** Real photos, real talks, real posts; no filler or invented claims.
