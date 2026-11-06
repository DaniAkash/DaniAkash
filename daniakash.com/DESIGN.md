---
name: daniakash.com
description: Dani Akash's whole world on one tidy bento grid, visible at a glance, at a compact desk-sized scale.
colors:
  paper: "oklch(0.959 0.007 85)"
  tile-white: "oklch(1 0 0)"
  tile-white-hover: "oklch(0.985 0.004 85)"
  text-ink: "oklch(0.2 0.008 290)"
  text-muted: "oklch(0.5 0.013 290)"
  fill-muted: "oklch(0.935 0.008 85)"
  hairline: "oklch(0.2 0.008 290 / 9%)"
  input-stroke: "oklch(0.2 0.008 290 / 14%)"
  blue: "oklch(0.53 0.24 268)"
  blue-hover: "oklch(0.49 0.24 268)"
  on-blue: "oklch(0.99 0 0)"
  yellow: "oklch(0.89 0.15 92)"
  yellow-hover: "oklch(0.86 0.16 90)"
  pink: "oklch(0.76 0.16 358)"
  pink-hover: "oklch(0.72 0.17 358)"
  green: "oklch(0.74 0.15 170)"
  green-hover: "oklch(0.7 0.15 170)"
  on-colour: "oklch(0.2 0.008 290)"
  ink: "oklch(0.2 0.008 290)"
  ink-hover: "oklch(0.26 0.01 290)"
  on-ink: "oklch(0.96 0.007 85)"
  on-ink-muted: "oklch(0.78 0.01 85)"
  night-ground: "oklch(0.155 0.006 290)"
  night-tile: "oklch(0.21 0.008 290)"
  night-tile-hover: "oklch(0.245 0.009 290)"
  night-text: "oklch(0.955 0.006 85)"
  night-text-muted: "oklch(0.72 0.01 290)"
  night-fill-muted: "oklch(0.25 0.008 290)"
  night-hairline: "oklch(1 0 0 / 9%)"
  night-link-blue: "oklch(0.72 0.15 268)"
  night-blue: "oklch(0.55 0.22 268)"
  night-blue-hover: "oklch(0.6 0.2 268)"
  night-yellow: "oklch(0.86 0.15 92)"
  night-yellow-hover: "oklch(0.9 0.14 92)"
  night-pink: "oklch(0.74 0.15 358)"
  night-pink-hover: "oklch(0.78 0.14 358)"
  night-green: "oklch(0.72 0.14 170)"
  night-green-hover: "oklch(0.76 0.13 170)"
  night-ink: "oklch(0.31 0.014 290)"
  night-ink-hover: "oklch(0.35 0.016 290)"
typography:
  stat:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "\"tnum\""
  display:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "2.125rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  subdisplay:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"ss01\""
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.84375rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"ss01\""
  caption:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.45
    fontFeature: "\"ss01\""
  meta:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "\"ss01\""
  data:
    fontFamily: "Geist Mono Variable, ui-monospace, SF Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "\"tnum\""
  prose:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    fontFeature: "\"ss01\""
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.75rem"
  2xl: "0.875rem"
  prose: "1rem"
  tile: "1.125rem"
  pill: "999px"
spacing:
  grid-gap-sm: "12px"
  grid-gap-md: "20px"
  tile-pad-sm: "16px"
  tile-pad-md: "18px"
  tile-pad-feature: "24px"
  tile-pad-header: "28px"
  page-x-sm: "16px"
  page-x-md: "24px"
  row-height: "8.625rem"
  content-width: "1040px"
  container: "1088px"
components:
  tile-plain:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.tile}"
    padding: "18px"
  tile-plain-hover:
    backgroundColor: "{colors.tile-white-hover}"
  tile-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.tile}"
    padding: "18px"
  tile-blue-hover:
    backgroundColor: "{colors.blue-hover}"
  tile-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.on-colour}"
    rounded: "{rounded.tile}"
    padding: "18px"
  tile-yellow-hover:
    backgroundColor: "{colors.yellow-hover}"
  tile-pink:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.on-colour}"
    rounded: "{rounded.tile}"
    padding: "18px"
  tile-pink-hover:
    backgroundColor: "{colors.pink-hover}"
  tile-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-colour}"
    rounded: "{rounded.tile}"
    padding: "18px"
  tile-green-hover:
    backgroundColor: "{colors.green-hover}"
  tile-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.tile}"
    padding: "18px"
  tile-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "36px"
  button-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-inverse:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "36px"
  button-inverse-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
  button-on-blue:
    backgroundColor: "{colors.on-blue}"
    textColor: "{colors.blue}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  button-chip:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  button-chip-hover:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.text-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "32px"
  nav-link-hover:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
  nav-link-active:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
  input-email:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  button-subscribe:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "40px"
  chip-status:
    textColor: "{colors.text-ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  chip-tech:
    textColor: "{colors.text-ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  connect-row:
    backgroundColor: "{colors.fill-muted}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.xl}"
    padding: "6px 12px"
    height: "44px"
  connect-row-hover:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
  icon-button:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.pill}"
    size: "36px"
  icon-button-hover:
    backgroundColor: "{colors.tile-white-hover}"
  footer-social:
    textColor: "{colors.on-ink}"
    rounded: "10px"
    size: "36px"
  footer-social-hover:
    backgroundColor: "{colors.on-ink}"
    textColor: "{colors.ink}"
---

# Design System: daniakash.com

## Overview

**Creative North Star: "The Tidy Bento"**

Every surface is a grid of flat, rounded tiles laid on a warm paper ground, and every tile holds exactly one thing: an introduction, a number, a photo, a list of posts, a link to a deeper page. The whole site reads as one desk tidied into compartments, so a visitor sees who Dani is, what he is building, his numbers, his writing, his talks and his personality in a single viewport. Colour is not decoration here; a tile's fill tells you what kind of content it holds before you read a word.

This is the compact version of the world. The palette, tile tones, faces, motion and craft rules are unchanged; the scale is tightened to a desk-sized reading width. Content sits in a 1040px column, tiles carry 16px to 18px of padding and 1.125rem corners, gutters are 12px to 20px, and every piece of interface text maps onto one nine-step type ramp from 11px to 40px. The result fits the whole first-viewport bento, the latest writing and the talks count above the fold at 1440px without any tile feeling empty.

The world is calm and bright at rest and playful in its content. White tiles carry the reading; five flat colour tones (blue, yellow, pink, green, ink) carry meaning; candid full-bleed photos carry personality. There are no shadows, no gradients, no borders on tiles. Depth is the step between the paper ground and the white tile, and interaction is a small lift of fill colour, never a shadow. The dark theme keeps the same grid and the same colour tiles on a near-black ground with raised charcoal tiles, and its ink stays a near-neutral. The direction rejects both the dark-terminal developer portfolio and the text-only minimal index, and it rejects costume worlds (trading cards, manga) in favour of a familiar developer-portfolio pattern done with care.

**Key Characteristics:**
- Flat tiles with 1.125rem corners on a warm paper ground, 12px gutters on phones and 20px from 768px.
- A 1040px content column inside a 1088px container, so the bento reads at desk scale rather than spanning the screen.
- Five content-coded tile tones plus white and full-bleed photo tiles.
- One nine-step type ramp (11px to 40px); no interface text sits off it.
- Bricolage Grotesque extra-bold display with tight negative tracking; Geist for everything you read; Geist Mono only for dates and data.
- Pills for every control; hover is a fill shift plus a 4px arrow nudge; press is a 1.5% scale down.
- Light and dark themes ship together, switched by a `.dark` class on `html`.

## Colors

A warm-paper and cool-ink neutral base with five saturated, flat tile tones, each bound to one content type.

### Primary
- **Building Blue** (`blue`, hover `blue-hover`): active projects and what Dani is building now. The BrowserOS tile, the Now page's latest-update tile, active project tiles, the pulsing "now" dots, the reading-progress bar on posts and issues, text links in prose and hovered list titles. In light mode it is also the `primary` and focus-ring colour. In dark mode the tile fill is `night-blue`, and links and the focus ring lift to **Night Link Blue** (`night-link-blue`) for legibility on charcoal.

### Secondary
- **Number Yellow** (`yellow`): numbers and metadata. GitHub stars, post counts, project stat tiles, tool counts, a post's date and tags tile, the small tag badges on Uses. It is also the text selection colour, the footer copyright hover, and the globe's marker colour.
- **Stage Pink** (`pink`): speaking. The talks-count tile, the Speaking tile, year rails and thumbnail fallbacks on /speaking.
- **Commons Green** (`green`): open source and community. The newsletter signup band, newsletter issue meta tiles, and open-source project tiles.

### Tertiary
- **Feature Ink** (`ink`, hover `ink-hover`): feature tiles that frame something larger than a single fact: the globe tile, the RSS tile, the "Always building" banner on /projects, the Destinations panel on /about, the coding-agents count on /uses, and the site footer. Ink also fills the dark pill buttons that sit on colour tiles. Text on ink is **Ink Paper** (`on-ink`) with **Ink Paper Muted** (`on-ink-muted`) for secondary lines. In dark mode ink lifts to `night-ink` so it still reads as a tile above the raised charcoal.

### Neutral
- **Warm Paper** (`paper`): the page ground in light mode. Never used as a tile fill.
- **Tile White** (`tile-white`): the default tile, the email input, the theme toggle and menu button, nav hover pills, and the Back and All posts chips. Hover tint **Tile White Lifted** (`tile-white-hover`).
- **Text Ink** (`text-ink`): body and heading text, and the inverted fill for active nav pills and inverted buttons.
- **Muted Text** (`text-muted`): ledes, dates, roles, secondary links.
- **Muted Fill** (`fill-muted`): connect rows, logo wells, inline code, blockquotes, the mobile menu link hover.
- **Hairline** (`hairline`): the only line in the system, a 1px divider between list rows inside a tile.
- **Night ladder** (`night-ground`, `night-tile`, `night-tile-hover`, `night-text`, `night-text-muted`, `night-fill-muted`): the dark theme's neutral steps; hairlines become `night-hairline`.

Text on blue is near-white (`on-blue`); text on yellow, pink and green is Text Ink in both themes.

### Named Rules
**The Content Colour Rule.** A colour tile's fill names its content type: blue is active work and now, yellow is a number, pink is speaking, green is open source and community, ink is a feature tile. Never fill a tile with a tone for variety, and never put a number on pink or a talk on yellow.

**The Neutral Ink Rule.** Ink is a near-neutral at hue 290 with chroma no higher than 0.016 in either theme. It never drifts into indigo, navy or purple.

**The Paper Ground Rule.** The ground is warm (hue 85) and the ink is cool (hue 290). Tiles sit on paper; paper never sits on a tile.

## Typography

**Display Font:** Bricolage Grotesque Variable (with Geist Variable, sans-serif)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui), stylistic set `ss01` on
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SF Mono), for dates and data only

**Character:** A chunky, slightly quirky grotesque shouting short headlines and big numbers, over a clean, neutral sans that does all the reading. The contrast is loud-voice, quiet-text, now held at a compact scale where the loud voice tops out at 40px.

### Hierarchy
The ramp lives in `src/styles/global.css` under `@theme` as `--text-*` steps with paired line-heights, and `src/utils/cn.ts` registers the same nine names with tailwind-merge so a ramp size and a text colour never cancel each other inside `cn()`.

- **Stat** (800, 2.5rem / 40px, line-height 1, -0.03em, tabular figures): the single number on a stat tile (473+, 29, post and tool counts) and the year on /speaking's sticky year rail.
- **Display** (800, 2.125rem / 34px, -0.03em): every page H1 from 768px up, one per route inside the page's header tile. H1s set their own leading from 0.95 (About, Blog, Now, Newsletter, Resume) through 1 (home, Projects, Speaking, Uses) to 1.05 (post and issue titles).
- **Subdisplay** (800, 1.75rem / 28px, line-height 1.05, -0.03em): every page H1 below 768px, the year headers on /blog, and the footer sign-off from 768px up.
- **Heading** (800, 1.375rem / 22px, line-height 1.15, -0.025em): feature-tile names (BrowserOS, the "Always building" banner), the newsletter band heading, newsletter year labels, talk fallback names, and the footer sign-off on phones.
- **Title** (700, 1.0625rem / 17px, line-height 1.3, -0.015em): tile headings (Latest writing, More from the blog, Work, Speaking, Connect, Now, Uses, the globe tile line). The wordmark uses this step at 800 and -0.02em.
- **Lede** (400, 0.9375rem / 15px, line-height 1.5, Muted Text, max 44ch to 56ch, usually `leading-snug`): the sentence under every page H1, the Now page's lists, list titles on /blog, and resume role titles.
- **Body** (400, 0.84375rem / 13.5px, line-height 1.55): tile paragraphs, project descriptions (capped at 70ch), post titles in homepage lists at 600, nav links at 500, footer links, the email field and Subscribe button.
- **Caption** (600, 0.75rem / 12px, line-height 1.45): button text, stat captions, "See every talk" style links, the on-blue pill, tile sub-lines and the copyright.
- **Meta** (500 to 600, 0.6875rem / 11px, line-height 1.4): roles under company names, connect-row platform labels, status and tech chips, tag badges.
- **Data** (Geist Mono 400 to 500 at the Meta size, tabular): dates in YYYY.MM.DD form, tenure ranges, counts.
- **Prose** (400, 1rem, line-height 1.75): long-form posts and issues inside a 68ch measure, with h2 at 1.375em and h3 at 1.125em in the display face at 700 and -0.02em. Prose stays at reading size; it is the one place the compact ramp does not shrink text.

### Named Rules
**The One Ramp Rule.** Every interface text size is one of the nine ramp steps (meta, caption, body, lede, title, heading, subdisplay, display, stat). No arbitrary `text-[..]` sizes and no stock Tailwind sizes in UI; long-form prose is the only text sized outside the ramp.

**The Mono Is Data Rule.** Geist Mono appears only on dates, ranges and counts. Never set a heading, label or sentence in mono.

**The Two Weights Rule.** Display text is 700 or 800 and nothing lighter; body text is 400 to 600 and nothing heavier. Headings use `text-wrap: balance`.

## Layout

A centred container of max 1088px with 16px side padding on phones and 24px from 768px, so content is 1040px wide at desktop. The nav, `main` and footer share that container. Every page is built from bento grids of tiles separated by a 12px gap below 768px and a 20px gap above; vertical bands of tiles are separated by the same gap (`mt-3` / `md:mt-5`), so the gutter is the only rhythm.

- **Below 768px:** a 2-column grid. Most tiles span both columns; stat tiles and small photos pair up side by side. Photo tiles take an explicit aspect ratio (4/3, 3/4, 16/9, square) because there is no row height to fill.
- **768px to 1023px:** a 4-column grid. Hero tiles span 2 to 4 columns; photos switch to filling their row.
- **1024px and up:** a 6-column grid. The homepage first viewport uses four rows with a 138px (8.625rem) minimum height and dense auto-flow, composing 2x2 hello, 2x2 speaking photo, 2x1 BrowserOS, 1x1 stars and cosplay, 2x2 latest writing, 1x2 hike photo, 2x1 globe, 1x2 talks, and 1x1 Now and Uses tiles. The second band holds More from the blog (4 wide) beside Work (2 wide, 2 tall), then Speaking, a market photo, a full-width Connect tile and the newsletter band.
- **Row height:** 8.625rem is the system's small-tile unit. Homepage tiles and the Blog and Newsletter header tiles use it; stat tiles elsewhere use 8.5rem, project tiles 11rem, and page header tiles grow to 13rem from 768px or 1024px.
- **Year-grouped lists** (Blog, Newsletter, Speaking) use a two-track grid at 1024px and up: a 9rem year rail (or 1fr against 3fr on Speaking) beside the list, sticky at 24px from the top.
- **Reading pages** (posts, newsletter issues) narrow to a 52rem column; the prose sits in a 68ch measure inside a white tile padded 20px by 28px on phones and 40px from 768px.
- **Tile padding** is 16px below 768px and 18px above. Content-heavy tiles step up from 768px: 24px for Connect on /about, the Now latest-update tile and resume sections, 28px for page and post title tiles.
- **Nav band:** 16px above and 8px below on phones, 28px above and 20px below from 768px. The footer closes with 24px (phones) or 40px of bottom space.

## Elevation & Depth

This system is flat. There are no box shadows, no gradients and no borders on tiles anywhere in the build. Depth comes from one tonal step: white tiles on warm paper in light mode, charcoal tiles on near-black in dark mode. Hover lifts a tile's fill one step lighter (white, dark) or deeper (colour tones in light mode), which is the only response to state. Photos are full bleed and clipped by the tile radius, with no overlay or frame.

### Named Rules
**The Flat Tile Rule.** A tile is a flat fill with rounded corners. No shadow, no gradient, no border, no glow, at rest or on hover.

**The Colour Lift Rule.** Interactive tiles answer hover by shifting to their `-hover` fill over 300ms and answer press by scaling to 0.985. Nothing rises, nothing casts.

## Shapes

One soft-rectangle language on a single radius scale. Tiles are 1.125rem (18px) at every width. Every control is a full pill (999px): nav links, buttons, the email field, status chips, tag badges, the theme toggle and the menu button. Secondary containers step down the scale: the mobile menu panel at the tile radius; prose code blocks, blockquotes and images at 1rem; the YouTube embed at 0.875rem; connect rows, mobile menu links, list-row hover wells, icon wells and inset talk thumbnails at 0.75rem; homepage work logo wells and the globe tooltip at 0.625rem; tech chips at 0.5rem; inline code at 0.375rem. The footer's social links are 36px rounded squares at 10px, the one square-ish control, set apart because they sit in a row of brand marks. The only circles are the avatar, the pulsing status dots, the play badge and the globe.

### Named Rules
**The Pill Control Rule.** If you can press it and it is not a tile, a connect row or a footer social square, it is a pill.

## Components

### Tiles
Calm compartments; the whole vocabulary of the site, built by one `Tile` component.
- **Corner Style:** 1.125rem (`rounded-tile`).
- **Background:** one of seven tones: plain (Tile White), blue, yellow, pink, green, ink, or photo (Muted Fill behind a full-bleed `object-cover` image with zero padding).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none. Rows inside a tile are split by 1px hairlines with no rule above the first row.
- **Internal Padding:** 16px on phones, 18px from 768px; content is pinned with flex (`justify-between` or `justify-end`) so the heading or number sits at the tile's foot.
- **Interactive tiles:** a tile with an `href` becomes the link. It shifts to its hover fill over 300ms on the expo-out curve, scales to 0.985 when pressed, and its inner arrow nudges 4px right.
- **Stat tile:** yellow (pink for talks, ink for agent counts) with a single Stat numeral and a Caption below; at most a 16px to 20px icon or a Caption line above. Nothing else.

### Buttons
Rounded, solid, confident; never outlined.
- **Shape:** full pill (999px), 36px tall for in-tile actions, 40px for the subscribe form.
- **Ink button:** ink fill, Ink Paper text, Caption semibold, 16px horizontal padding, 14px trailing arrow; hover to ink-hover. Used on pink tiles (View all talks).
- **Inverse button:** Text Ink fill with paper text, full width inside the Work tile; hover flips to Building Blue with white text (Resume).
- **On-blue button:** near-white fill with blue text, Caption semibold, 6px by 12px padding, trailing arrow that nudges with the tile (Explore the work).
- **Back and All posts chips:** Tile White pills, 36px tall, 14px horizontal padding, Caption medium; hover inverts to Text Ink with paper text.
- **Focus:** a global 3px solid ring in the primary blue (Night Link Blue in dark), offset 3px.

### Chips
- **Status chip:** current-colour at 10% fill, full pill, 2px by 10px, Meta semibold (Active, Open Source, Previously). Inherits the tile's text colour, so it works on any tone.
- **Tech chip:** current-colour at 10% fill, 0.5rem radius, 2px by 8px, Meta medium.
- **Tag chip:** on a yellow tile, Text Ink at 10% as a pill; on Uses, a solid yellow pill badge; both Meta semibold.
- **Now badge:** on the blue latest-update tile, on-blue at 15% as a pill with a 6px pulsing dot, Caption medium.

### Inputs / Fields
- **Style:** Tile White fill, no stroke, full pill, 40px tall, 16px horizontal padding, Body text, Muted Text placeholder. Sits on the green newsletter band beside a 40px ink Subscribe pill (20px padding, Body semibold) inside a 400px form; stacks below 640px.
- **Focus:** a 3px ink outline offset 2px (the blue ring would vanish against green), the one local exception to the global ring.

### Navigation
- **Wordmark:** `dani_akash_` in the display face at the Title step, 800, -0.02em, 40px tall hit area; hover turns it blue.
- **Desktop (768px and up):** a row of pill links 2px apart, 32px tall, 12px horizontal padding, Body medium (13.5px), Muted Text; hover fills Tile White with Text Ink; the current page is an inverted pill (Text Ink fill, paper text). Blog stays active on post pages.
- **Mobile (below 768px):** a 36px round Tile White menu button opens a Tile White panel (1.125rem radius, 8px padding) with a 2-column grid of 44px links at 0.75rem radius, Body medium; Escape and link taps close it.
- **Theme toggle:** a 36px round Tile White icon button with a 16px moon (light) or sun (dark), hover to Tile White Lifted; the choice persists in local storage and is restored before first paint.

### Connect Row
Muted Fill rows at 0.75rem radius, 44px tall, 6px by 12px padding, a 16px icon beside a Meta platform label (70% opacity) over a Caption semibold handle. Laid out 1, 2 or 3 across with 8px gaps. Hover inverts the whole row to Text Ink with paper text. The /about variant is a 40px single-line row in Body semibold.

### Lists Inside Tiles
Post and work lists are hairline-divided rows of 8px vertical padding: a Data date over (or beside, on a 5rem to 5.5rem track) a Body semibold title that turns blue on hover, with a 14px arrow that nudges 4px. Work rows add a 28px logo well on Muted Fill at 0.625rem radius, Meta role and Data tenure. Year-grouped lists on /blog and /newsletter make each row a 0.75rem hover well that lifts to Tile White Lifted.

### Footer
A single ink tile closing every page, 28px between its two rows: a display-face sign-off ("Thanks for scrolling all the way down.") at Heading (22px) on phones and Subdisplay (28px) from 768px, line-height 1.05 and 16ch wide; a row of 36px social squares (10px radius, Ink Paper at 10%, 16px icons, 6px apart) that invert to Ink Paper on hover; the route links in Body medium Ink Paper Muted with 36px hit areas; and the Caption copyright with an underlined name that turns yellow on hover.

### Globe Tile (signature)
An ink tile holding a 96px WebGL globe (cobe) beside a Title line and a Caption link, with yellow markers for every destination. It fades in over 700ms, spins slowly (0.0035 rad per frame), pauses off-screen and stops entirely under reduced motion, and links to /about, where the full interactive globe lives in a sticky ink panel (28rem on phones, 34rem from 768px, viewport height capped at 40rem from 1024px).

### Icons
A single inline-SVG set: filled brand marks (GitHub, X, Bluesky, LinkedIn, Instagram) and 1.75px round-capped stroke icons (arrow, arrow up-right, mail, RSS, sun, moon, menu, close, play, map pin) at 20px default, 16px for controls and 14px inside Caption links. Arrows trail link text and move on hover: right arrows nudge 4px right, up-right arrows nudge 2px up and right.

### Motion
One curve, short durations. `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) at 300ms for tile fills, presses and arrow nudges; 500ms for the 1.03 zoom on talk thumbnails; plain colour transitions for links and pills; a pulsing dot marks live "now" content. Posts and newsletter issues carry a 4px blue reading-progress bar fixed to the top. `prefers-reduced-motion` collapses every animation and transition to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** build every new surface from tiles on the 2, 4 and 6 column grid with 12px and 20px gaps inside the 1088px container (1040px of content).
- **Do** size every interface string from the nine-step ramp (`text-meta` through `text-stat`) and merge classes through `cn()` so tailwind-merge keeps the ramp size beside a colour.
- **Do** set every page H1 as `text-subdisplay md:text-display` and the sentence under it as `text-lede` in Muted Text.
- **Do** pick a tile tone by content: blue for active work and now, yellow for numbers, pink for speaking, green for open source and community, ink for feature tiles, white for everything else.
- **Do** keep tiles flat: a fill, the 1.125rem tile radius, 16px or 18px padding, and no shadow, gradient or border.
- **Do** answer hover with the tone's `-hover` fill over 300ms on the expo-out curve, a 0.985 press scale, and a 4px arrow nudge.
- **Do** make every non-tile control a pill, 36px tall for in-tile actions and 40px for form controls; keep mobile menu links at 44px.
- **Do** set dates and counts in Geist Mono at the Meta size with tabular figures, and big numbers at the Stat step with tabular figures.
- **Do** show real photos full bleed inside photo tiles, cropped with `object-position` to keep faces in frame.
- **Do** define every new colour in both themes and keep text on yellow, pink and green as Text Ink.

### Don't:
- **Don't** add box shadows, drop shadows, glows or gradients to tiles, buttons or text.
- **Don't** use arbitrary `text-[..]` sizes or stock Tailwind text sizes in interface code; add a ramp step only by changing the ramp itself.
- **Don't** shrink long-form prose to the compact ramp; posts and issues read at 1rem and line-height 1.75.
- **Don't** let ink take on a hue: no indigo, navy or purple ink in either theme (chroma stays at or below 0.016).
- **Don't** use a colour tone decoratively or to "balance" a grid when its content type does not match.
- **Don't** set headings or prose in Geist Mono, or body text in Bricolage Grotesque.
- **Don't** put borders around tiles or cards; the hairline is only for dividing rows inside a tile.
- **Don't** add eyebrow labels or kicker text above headings; a tile's tone and heading already say what it is.
- **Don't** drift toward a dark-terminal developer portfolio or a costume world (trading cards, manga).
- **Don't** use icon fonts or emoji as interface icons; use the inline SVG set.
