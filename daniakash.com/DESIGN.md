---
name: daniakash.com
description: Dani Akash's whole world on one tidy bento grid, visible at a glance.
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
  display:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  numeral:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "\"tnum\""
  headline:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
    fontFeature: "\"ss01\""
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  item:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.375
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
    fontFeature: "\"ss01\""
  data:
    fontFamily: "Geist Mono Variable, ui-monospace, SF Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    fontFeature: "\"tnum\""
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  tile: "1.5rem"
  pill: "999px"
spacing:
  grid-gap-sm: "12px"
  grid-gap-md: "16px"
  tile-pad-sm: "20px"
  tile-pad-md: "24px"
  tile-pad-lg: "32px"
  page-x-sm: "16px"
  page-x-md: "32px"
  page-x-lg: "48px"
  container: "1440px"
components:
  tile-plain:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.tile}"
    padding: "24px"
  tile-plain-hover:
    backgroundColor: "{colors.tile-white-hover}"
  tile-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.tile}"
    padding: "24px"
  tile-blue-hover:
    backgroundColor: "{colors.blue-hover}"
  tile-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.on-colour}"
    rounded: "{rounded.tile}"
    padding: "24px"
  tile-yellow-hover:
    backgroundColor: "{colors.yellow-hover}"
  tile-pink:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.on-colour}"
    rounded: "{rounded.tile}"
    padding: "24px"
  tile-pink-hover:
    backgroundColor: "{colors.pink-hover}"
  tile-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-colour}"
    rounded: "{rounded.tile}"
    padding: "24px"
  tile-green-hover:
    backgroundColor: "{colors.green-hover}"
  tile-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.tile}"
    padding: "24px"
  tile-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-inverse:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  button-inverse-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
  button-on-blue:
    backgroundColor: "{colors.on-blue}"
    textColor: "{colors.blue}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  button-chip:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  button-chip-hover:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  nav-link-hover:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
  nav-link-active:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
  input-email:
    backgroundColor: "{colors.tile-white}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  chip-status:
    textColor: "{colors.text-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip-tech:
    textColor: "{colors.text-ink}"
    rounded: "{rounded.lg}"
    padding: "4px 10px"
  connect-row:
    backgroundColor: "{colors.fill-muted}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.tile}"
    padding: "10px 16px"
    height: "56px"
  connect-row-hover:
    backgroundColor: "{colors.text-ink}"
    textColor: "{colors.paper}"
  icon-button:
    textColor: "{colors.text-ink}"
    rounded: "{rounded.pill}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.tile-white}"
---

# Design System: daniakash.com

## Overview

**Creative North Star: "The Tidy Bento"**

Every surface is a grid of flat, generously rounded tiles laid on a warm paper ground, and every tile holds exactly one thing: an introduction, a number, a photo, a list of posts, a link to a deeper page. The whole site reads as one desk tidied into compartments, so a visitor sees who Dani is, what he is building, his numbers, his writing, his talks and his personality in a single viewport. Colour is not decoration here; a tile's fill tells you what kind of content it holds before you read a word.

The world is calm and bright at rest and playful in its content. White tiles carry the reading; five flat colour tones (blue, yellow, pink, green, ink) carry meaning; candid full-bleed photos carry personality. There are no shadows, no gradients, no borders on tiles. Depth is the step between the paper ground and the white tile, and interaction is a small lift of fill colour, never a shadow. The dark theme keeps the same grid and the same colour tiles on a near-black ground with raised charcoal tiles, and its ink stays a near-neutral.

The direction rejects both the dark-terminal developer portfolio and the text-only minimal index, and it rejects costume worlds (trading cards, manga) in favour of a familiar developer-portfolio pattern done with care.

**Key Characteristics:**
- Flat tiles with 1.5rem corners on a warm paper ground, 12px to 16px gutters.
- Five content-coded tile tones plus white and full-bleed photo tiles.
- Bricolage Grotesque extra-bold display with tight negative tracking; Geist for everything you read; Geist Mono only for dates and data.
- Pills for every control; nothing square-cornered except prose details.
- Hover is a fill shift plus a 4px arrow nudge; press is a 1.5% scale down.
- Light and dark themes ship together, switched by a `.dark` class on `html`.

## Colors

A warm-paper and cool-ink neutral base with five saturated, flat tile tones, each bound to one content type.

### Primary
- **Building Blue** (oklch(0.53 0.24 268), hover oklch(0.49 0.24 268)): active projects and what Dani is building now. The BrowserOS tile, the Now page's latest-update tile, active project tiles, the pulsing "now" dot, the reading-progress bar on posts, text links in prose and hovered list titles. In light mode it is also the `primary` and focus-ring colour. In dark mode the tile fill is oklch(0.55 0.22 268) and links and the focus ring lift to **Night Link Blue** (oklch(0.72 0.15 268)) for legibility on charcoal.

### Secondary
- **Number Yellow** (oklch(0.89 0.15 92)): numbers and metadata. GitHub stars, post counts, project stat tiles, tool counts, a post's date and tags tile, the small tag badges on Uses. It is also the text selection colour, the footer copyright hover, and the globe's marker colour.
- **Stage Pink** (oklch(0.76 0.16 358)): speaking. The talks-count tile, the Speaking tile, year headers and thumbnail fallbacks on /speaking.
- **Commons Green** (oklch(0.74 0.15 170)): open source and community. The newsletter signup band, newsletter issue meta tiles, and open-source project tiles.

### Tertiary
- **Feature Ink** (oklch(0.2 0.008 290), hover oklch(0.26 0.01 290)): feature tiles that frame something larger than a single fact: the globe tile, the RSS tile, the "Always building" banner, the Destinations panel on /about, the coding-agents count on /uses, and the site footer. Ink also fills the dark pill buttons that sit on colour tiles. Text on ink is **Ink Paper** (oklch(0.96 0.007 85)) with **Ink Paper Muted** (oklch(0.78 0.01 85)) for secondary lines. In dark mode ink lifts to oklch(0.31 0.014 290) so it still reads as a tile above the raised charcoal.

### Neutral
- **Warm Paper** (oklch(0.959 0.007 85)): the page ground in light mode. Never used as a tile fill.
- **Tile White** (oklch(1 0 0)): the default tile, the email input, nav hover pills and the back/all-posts chips. Hover tint **Tile White Lifted** (oklch(0.985 0.004 85)).
- **Text Ink** (oklch(0.2 0.008 290)): body and heading text, and the inverted fill for active nav pills and inverted buttons.
- **Muted Text** (oklch(0.5 0.013 290)): ledes, dates, roles, secondary links.
- **Muted Fill** (oklch(0.935 0.008 85)): connect rows, inline code, blockquotes, logo wells.
- **Hairline** (Text Ink at 9%): the only line in the system, a 1px divider between list rows inside a tile.
- **Night Ground** (oklch(0.155 0.006 290)), **Night Tile** (oklch(0.21 0.008 290)), **Night Tile Lifted** (oklch(0.245 0.009 290)), **Night Text** (oklch(0.955 0.006 85)), **Night Muted Text** (oklch(0.72 0.01 290)), **Night Muted Fill** (oklch(0.25 0.008 290)): the dark theme's neutral ladder; hairlines become white at 9%.

Text on blue is near-white (oklch(0.99 0 0)); text on yellow, pink and green is Text Ink in both themes.

### Named Rules
**The Content Colour Rule.** A colour tile's fill names its content type: blue is active work and now, yellow is a number, pink is speaking, green is open source and community, ink is a feature tile. Never fill a tile with a tone for variety, and never put a number on pink or a talk on yellow.

**The Neutral Ink Rule.** Ink is a near-neutral at hue 290 with chroma no higher than 0.016 in either theme. It never drifts into indigo, navy or purple.

**The Paper Ground Rule.** The ground is warm (hue 85) and the ink is cool (hue 290). Tiles sit on paper; paper never sits on a tile.

## Typography

**Display Font:** Bricolage Grotesque Variable (with Geist Variable, sans-serif)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui), stylistic set `ss01` on
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SF Mono), for dates and data only

**Character:** A chunky, slightly quirky grotesque shouting short headlines and big numbers, over a clean, neutral sans that does all the reading. The contrast is loud-voice, quiet-text.

### Hierarchy
- **Display** (800, clamp(2.5rem, 5vw, 4.5rem) on most pages, up to clamp(3rem, 6vw, 5.5rem) on About, Blog and Now, line-height 0.92 to 0.95, tracking -0.035em): one page title per route, inside the page's header tile. Post and issue titles use a calmer clamp(2.25rem, 5vw, 3.75rem) at line-height 1.02 and -0.03em.
- **Numeral** (800, 3rem to 4.5rem, line-height 1, tracking -0.03em, tabular figures): the single number on a stat tile (473+, 29, 16, 166).
- **Headline** (700, 1.875rem from md up, 1.5rem below, tracking -0.02em): tile headings such as Work, Speaking, Connect, More from the blog. Feature and project names use 800 at -0.025em.
- **Title** (700, 1.5rem, tracking -0.02em): small-tile headings (Now, Uses, Latest writing, globe tile line).
- **Lede** (400, 1.125rem to 1.25rem, line-height 1.375, Muted Text, max 34ch to 48ch): the sentence under a page title.
- **Body** (400, 1.0625rem, line-height 1.625): tile paragraphs and project descriptions, capped at 60ch to 70ch. Long-form prose is 1.0625rem at line-height 1.75 inside a 68ch column, with headings in the display face at 700.
- **Item** (600, 1rem to 1.125rem, line-height 1.375): post titles and company names in lists.
- **Label** (600, 0.875rem): stat captions, button text, status chips, "See every talk" style links. Nav links are 500 at 15px.
- **Data** (Geist Mono 400, 0.75rem, tabular): dates in YYYY.MM.DD form, tenure ranges, counts beside headings.

### Named Rules
**The Mono Is Data Rule.** Geist Mono appears only on dates, ranges and counts. Never set a heading, label or sentence in mono.

**The Two Weights Rule.** Display text is 700 or 800 and nothing lighter; body text is 400 to 600 and nothing heavier. Headings use `text-wrap: balance`.

## Layout

A centred container of max 1440px with side padding of 16px (mobile), 32px (768px and up) and 48px (1024px and up). Every page is built from bento grids of tiles separated by a 12px gap below 768px and a 16px gap above; vertical bands of tiles are separated by the same gap, so the gutter is the only rhythm.

- **Below 768px:** a 2-column grid. Most tiles span both columns; stat tiles and small photos pair up side by side. Photo tiles take an explicit aspect ratio (4/3, 3/4, 16/9, square) because there is no row height to fill.
- **768px to 1023px:** a 4-column grid. Hero tiles span 2 or 3 columns; photos switch to filling their row.
- **1024px and up:** a 6-column grid. The homepage first viewport uses four rows with a 180px (11.25rem) minimum height and dense auto-flow, composing 2x2 hello, 2x2 speaking photo, 2x1 BrowserOS, 1x1 stars and cosplay, 2x2 latest writing, 1x2 hike photo, 2x1 globe, 1x2 talks, and 1x1 Now and Uses tiles.
- **Year-grouped lists** (Blog, Speaking) use a two-track grid at 1024px and up: a sticky year label (12rem, or 1fr against 3fr) beside the list, sticky at 24px from the top.
- **Reading pages** (posts, newsletter issues) narrow to a 60rem column; the prose sits in a 68ch measure inside a white tile padded 64px on desktop.
- **Tile padding** is 20px below 768px and 24px above; feature bands (newsletter, Now latest update) use 32px, and the post title tile 40px.
- Minimum heights keep small tiles square-ish: 10rem to 11.25rem for stat and link tiles, 15rem for project tiles, 14rem to 18rem for page header tiles.

## Elevation & Depth

This system is flat. There are no box shadows, no gradients and no borders on tiles anywhere in the build. Depth comes from one tonal step: white tiles on warm paper in light mode, charcoal tiles (oklch(0.21 0.008 290)) on near-black (oklch(0.155 0.006 290)) in dark mode. Hover lifts a tile's fill one step lighter (white, dark) or deeper (colour tones in light mode), which is the only response to state. Photos are full bleed and clipped by the tile radius, with no overlay or frame.

### Named Rules
**The Flat Tile Rule.** A tile is a flat fill with rounded corners. No shadow, no gradient, no border, no glow, at rest or on hover.

**The Colour Lift Rule.** Interactive tiles answer hover by shifting to their `-hover` fill over 300ms and answer press by scaling to 0.985. Nothing rises, nothing casts.

## Shapes

One soft-rectangle language. Tiles are 1.5rem (24px) radius from 768px up and 1.25rem (20px) below, so corners stay proportional on phones. Every control is a full pill (999px): nav links, buttons, inputs, status chips, the theme toggle and menu button. Secondary containers step down the same scale: connect rows and footer icon buttons at 1.5rem, logo wells at 1.25rem, tech chips, prose code blocks, blockquotes and prose images at 1rem, inline code at 0.375rem. The only circles are the avatar, the pulsing status dot and the globe.

### Named Rules
**The Pill Control Rule.** If you can press it and it is not a tile, it is a pill.

## Components

### Tiles
Calm compartments; the whole vocabulary of the site.
- **Corner Style:** 1.5rem from 768px up, 1.25rem below.
- **Background:** one of seven tones: plain (Tile White), blue, yellow, pink, green, ink, or photo (Muted Fill behind a full-bleed `object-cover` image with zero padding).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none. Rows inside a tile are split by 1px hairlines with no rule above the first row.
- **Internal Padding:** 20px mobile, 24px desktop; content is pinned with flex (`justify-between` or `justify-end`) so the heading or number sits at the tile's foot.
- **Interactive tiles:** a tile with a link becomes the link. It shifts to its hover fill over 300ms on the expo-out curve, scales to 0.985 when pressed, and its inner arrow nudges 4px right.
- **Stat tile:** yellow (or pink for talks) with a single Numeral and a Label caption; nothing else.

### Buttons
Rounded, solid, confident; never outlined.
- **Shape:** full pill (999px), 48px tall for primary actions, 44px for chips and nav.
- **Ink button:** ink fill, Ink Paper text, 600 weight, 20px horizontal padding; hover to ink-hover. Used on pink and green tiles (View all talks, Subscribe).
- **Inverse button:** Text Ink fill with paper text; hover flips to Building Blue with white text (Resume).
- **On-blue button:** near-white fill with blue text, 0.875rem semibold, 10px by 16px padding, trailing arrow that nudges with the tile (Explore the work).
- **Back and All posts chips:** Tile White pills, 44px tall, 0.875rem medium; hover inverts to Text Ink with paper text.
- **Focus:** a global 3px solid ring in the primary blue (Night Link Blue in dark), offset 3px.

### Chips
- **Status chip:** current-colour at 10% fill, full pill, 4px by 12px, 0.75rem semibold (Active, Open Source, Previously). Inherits the tile's text colour, so it works on any tone.
- **Tech chip:** current-colour at 10% fill, 1rem radius, 4px by 10px, 13px medium.
- **Tag chip:** on a yellow tile, Text Ink at 10% as a pill; on Uses, a solid yellow pill badge.

### Inputs / Fields
- **Style:** Tile White fill, no stroke, full pill, 48px tall, 20px horizontal padding, 1rem text, Muted Text placeholder. Sits on the green newsletter band beside an ink Subscribe button; stacks below 640px.
- **Focus:** a 3px ink outline offset 2px (the blue ring would vanish against green), the one local exception to the global ring.

### Navigation
- **Wordmark:** `dani_akash_` in the display face, 800, 1.25rem, -0.02em; hover turns it blue.
- **Desktop (1024px and up):** a row of pill links, 44px tall, 15px medium, Muted Text; hover fills Tile White with Text Ink; the current page is an inverted pill (Text Ink fill, paper text). Blog stays active on post pages.
- **Mobile (below 1024px):** a 44px round menu button opens a Tile White panel (1.25rem radius, 8px padding) with a 2-column grid of 48px pill links; Escape and link taps close it.
- **Theme toggle:** a 44px round icon button (moon in light, sun in dark) beside the menu; the choice persists in local storage and is restored before first paint.

### Connect Row
Muted Fill rows, 1.5rem radius, 56px tall, icon plus a small platform label above a semibold handle. Hover inverts the whole row to Text Ink with paper text.

### Footer
A single ink tile closing every page: a display-face sign-off ("Thanks for scrolling all the way down.") at up to 3rem, a row of 48px icon buttons on Ink Paper at 10% that invert to Ink Paper on hover, the route links in Ink Paper Muted, and the copyright with an underlined name that turns yellow on hover.

### Globe Tile (signature)
An ink tile holding a small WebGL globe (cobe) at 112px to 144px with yellow markers for every destination. It fades in over 700ms, spins slowly (0.0035 rad per frame), pauses off-screen and stops entirely under reduced motion, and links to /about where the full globe lives in a sticky ink panel.

### Icons
A single inline-SVG set: filled brand marks (GitHub, X, Bluesky, LinkedIn, Instagram) and 1.75px round-capped stroke icons (arrow, arrow up-right, mail, RSS, sun, moon, menu, close, play, map pin) at 20px default, 16px inside links. Arrows trail link text and move on hover: right arrows nudge 4px right, up-right arrows nudge 2px up and right.

### Motion
One curve, short durations. `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) at 300ms for tile fills, presses and arrow nudges; 500ms for the 1.03 zoom on talk thumbnails; plain colour transitions for links and pills; a pulsing dot marks live "now" content. Posts carry a 4px blue reading-progress bar fixed to the top. `prefers-reduced-motion` collapses every animation and transition to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** build every new surface from tiles on the 2, 4 and 6 column grid with 12px and 16px gaps inside the 1440px container.
- **Do** pick a tile tone by content: blue for active work and now, yellow for numbers, pink for speaking, green for open source and community, ink for feature tiles, white for everything else.
- **Do** keep tiles flat: a fill, a 1.5rem radius (1.25rem on phones), and no shadow, gradient or border.
- **Do** answer hover with the tone's `-hover` fill over 300ms on the expo-out curve, a 0.985 press scale, and a 4px arrow nudge.
- **Do** make every non-tile control a pill at least 44px tall.
- **Do** set dates and counts in Geist Mono at 0.75rem with tabular figures, and big numbers in the display face with tabular figures.
- **Do** show real photos full bleed inside photo tiles, cropped with `object-position` to keep faces in frame.
- **Do** define every new colour in both themes and keep text on yellow, pink and green as Text Ink.

### Don't:
- **Don't** add box shadows, drop shadows, glows or gradients to tiles, buttons or text.
- **Don't** let ink take on a hue: no indigo, navy or purple ink in either theme (chroma stays at or below 0.016).
- **Don't** use a colour tone decoratively or to "balance" a grid when its content type does not match.
- **Don't** set headings or prose in Geist Mono, or body text in Bricolage Grotesque.
- **Don't** put borders around tiles or cards; the hairline is only for dividing rows inside a tile.
- **Don't** add eyebrow labels or kicker text above headings; a tile's tone and heading already say what it is.
- **Don't** drift toward a dark-terminal developer portfolio or a costume world (trading cards, manga).
- **Don't** use icon fonts or emoji as interface icons; use the inline SVG set.
