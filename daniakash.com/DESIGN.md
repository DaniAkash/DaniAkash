---
name: daniakash.com
description: Dani Akash's personal site, built as his home screen of real app icons, folders, widgets and a dock.
colors:
  wallpaper: "oklch(0.945 0.025 290)"
  wallpaper-dark: "oklch(0.17 0.02 285)"
  foreground: "oklch(0.2 0.012 285)"
  foreground-dark: "oklch(0.96 0.008 290)"
  muted-foreground: "oklch(0.48 0.02 285)"
  muted-foreground-dark: "oklch(0.74 0.015 290)"
  card: "oklch(1 0 0)"
  card-dark: "oklch(0.235 0.022 285)"
  sheet: "oklch(1 0 0)"
  sheet-dark: "oklch(0.21 0.02 285)"
  muted: "oklch(0.955 0.014 290)"
  muted-dark: "oklch(0.27 0.02 285)"
  hairline: "oklch(0.2 0.012 285 / 9%)"
  hairline-dark: "oklch(1 0 0 / 9%)"
  folder: "oklch(1 0 0 / 55%)"
  folder-dark: "oklch(1 0 0 / 10%)"
  dock: "oklch(1 0 0)"
  dock-dark: "oklch(0.27 0.022 285)"
  primary: "oklch(0.54 0.23 265)"
  primary-dark: "oklch(0.7 0.16 265)"
  live-blue: "oklch(0.53 0.24 268)"
  live-blue-dark: "oklch(0.55 0.22 268)"
  on-blue: "oklch(0.99 0 0)"
  bento-yellow: "oklch(0.89 0.15 92)"
  bento-yellow-dark: "oklch(0.86 0.15 92)"
  bento-pink: "oklch(0.76 0.16 358)"
  bento-pink-dark: "oklch(0.74 0.15 358)"
  bento-green: "oklch(0.74 0.15 170)"
  bento-green-dark: "oklch(0.72 0.14 170)"
  on-bright: "oklch(0.2 0.008 290)"
  ink: "oklch(0.2 0.012 285)"
  ink-dark: "oklch(0.31 0.03 285)"
  on-ink: "oklch(0.97 0.006 290)"
  on-ink-dark: "oklch(0.96 0.008 290)"
  on-ink-muted: "oklch(0.8 0.012 290)"
  on-ink-muted-dark: "oklch(0.78 0.012 290)"
  tint-blog: "#FF5A1F"
  tint-newsletter: "#00A876"
  tint-speaking: "#E5357F"
  tint-projects: "#2E5BFF"
  tint-about: "#7A5CFF"
  tint-uses: "#1C1B22"
  tint-now: "#FFC21A"
  tint-resume: "#5B6474"
  tint-home: "#E9E7F5"
  tint-ink: "#1C1B22"
typography:
  display:
    fontFamily: "Archivo Variable, Hanken Grotesk Variable, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  stat:
    fontFamily: "Archivo Variable, Hanken Grotesk Variable, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Archivo Variable, Hanken Grotesk Variable, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo Variable, Hanken Grotesk Variable, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  prose:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
  caption:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
  meta:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "tnum"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  2xl: "1.5rem"
  dock: "1.5rem"
  widget: "1.75rem"
  icon: "22.5%"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-md: "32px"
  container: "1200px"
  grid-gap-x: "8px"
  grid-gap-y: "12px"
  grid-gap-md: "16px"
  grid-row: "6.75rem"
  grid-row-lg: "7.5rem"
  widget-pad: "16px"
  widget-pad-md: "20px"
  sheet-pad: "16px"
  sheet-pad-md: "32px"
  icon-inset: "9.6%"
components:
  widget:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.widget}"
    padding: "{spacing.widget-pad}"
  widget-blue:
    backgroundColor: "{colors.live-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.widget}"
    padding: "{spacing.widget-pad}"
  widget-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.widget}"
    padding: "{spacing.widget-pad}"
  widget-yellow:
    backgroundColor: "{colors.bento-yellow}"
    textColor: "{colors.on-bright}"
    rounded: "{rounded.widget}"
    padding: "{spacing.widget-pad}"
  widget-pink:
    backgroundColor: "{colors.bento-pink}"
    textColor: "{colors.on-bright}"
    rounded: "{rounded.widget}"
    padding: "{spacing.widget-pad}"
  widget-green:
    backgroundColor: "{colors.bento-green}"
    textColor: "{colors.on-bright}"
    rounded: "{rounded.widget}"
    padding: "{spacing.widget-pad}"
  app-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.widget}"
    padding: "{spacing.sheet-pad-md}"
  app-icon-home:
    rounded: "{rounded.icon}"
    size: "88px"
  folder-tile:
    backgroundColor: "{colors.folder}"
    rounded: "{rounded.icon}"
    size: "88px"
    padding: "13px"
  folder-panel:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.widget}"
    padding: "28px"
    width: "min(92vw, 44rem)"
  dock:
    backgroundColor: "{colors.dock}"
    rounded: "{rounded.widget}"
    padding: "8px"
  dock-icon:
    rounded: "{rounded.icon}"
    size: "56px"
  app-library:
    backgroundColor: "{colors.dock}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.widget}"
    padding: "16px"
  story-dialog:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.widget}"
    padding: "28px"
    width: "min(92vw, 38rem)"
  command-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.2xl}"
    padding: "8px 8px 8px 16px"
  chip:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  chip-hover:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.wallpaper}"
  button-solid:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.wallpaper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  button-solid-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-blue}"
  button-blue:
    backgroundColor: "{colors.live-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-subscribe:
    backgroundColor: "{colors.on-bright}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  input-pill:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  icon-button:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    size: "40px"
---

# Design System: daniakash.com

## Overview

**Creative North Star: "The Home Screen"**

The site is Dani's phone home screen laid flat on the web. The homepage is a grid of real things he made: native app icons pulled from each repository, language and npm glyph icons for the libraries without one, folders that zoom open out of their own tile, and widgets that hold who he is, everything he has built, and his photos. A dock pinned to the bottom of every page carries a Home key and the site sections as apps. Every inner page is an app opened from that screen: an app sheet with its section icon, an Archivo headline and a close button that returns home. Every catalog app opens as a story dialog over the home screen, the way a phone app opens on top of its springboard. On phones (below 640px) the home screen shows only its widgets: app icons and folders are hidden there (they stay in the HTML), the widgets follow a fixed story order (who he is, Everything I've built, stars and talks side by side, the talk photo, Latest writing, two square photos, Speaking, the market photo, Work, More from the blog, Connect, the newsletter) with even 16px gaps, and every app stays one tap away through Everything I've built and the dock's Projects key. An app closed on a phone never aims at a hidden icon: with no visible icon to return to, its dialog simply fades.

The world is calm and flat. A pale lavender wallpaper (deep ink at night) sits behind opaque white widgets with large, soft corners and no borders. Colour comes from the icons themselves, the section tints, a few flat bento tiles (yellow, pink, green) for stats and features, and one blue that means "live". Depth is tonal, not shadowed: the only cast shadow in the system belongs to the dock and the App Library that rises out of it. Density is high on the home screen (icons pack an 8-column grid) and generous inside sheets, where long-form reading gets a 68ch measure and 17px text.

The physics are a phone's: icons lift on hover and press down to 90% on tap, folders grow from the tile you touched, and navigation morphs the tapped icon into the sheet or dialog it opens and shrinks it back on close, while the dock and status bar hold still. In-place physics settle on an expo ease-out curve; navigation rides a slightly firmer native curve. The rejected alternatives were the long project list and the dark terminal portfolio; there is no glass, no gradient and no decorative shadow.

**Key Characteristics:**
- Real app icons on the macOS squircle grid (22.5% corner radius, 9.6% inset margin), names set beneath.
- Opaque, borderless widgets at a 1.75rem radius on a tinted wallpaper.
- One blue for live state and actions; yellow, pink and green are bento tile fills; every other hue is an icon, a photo, or a section tint.
- Archivo 800 with negative tracking for every heading, Hanken Grotesk for everything read.
- A persisted dock and status bar on every page; inner pages are sheets and apps are dialogs, never a separate site chrome.
- Navigation is spatial: icons zoom into sheets, apps open over a still home screen, list and detail push and pop sideways.
- Light and dark ship together, switched by the status bar toggle and remembered per visitor.

## Colors

A cool lavender-and-ink neutral world in OKLCH (hue 285 to 290) that stays quiet so the app icons, section tints and a handful of flat bento tiles carry the colour.

### Primary
- **Signal Blue** (`primary`, lifted to `primary-dark` at night): links, the back link on sheets, the focus ring (3px outline, 3px offset), the caret, hover state of the solid button, the "Open" label on Projects rows and the link colour inside prose. In dark mode it lifts to a lighter, less saturated blue so links hold contrast on ink.
- **Live Blue** (`live-blue` / `live-blue-dark`): the bento palette's blue (`--blue`), a slightly cooler, more saturated sibling of Signal Blue. It fills the "all work" widget and the Now page's latest entry, the "Active" status badge on projects, the primary link button in story dialogs ("View on GitHub"), and text selection (with `on-blue` text). At night it shifts only a touch lighter and less saturated, because it is a fill under white text, not a text colour.

### Secondary
- **Ink Widget** (`ink` / `ink-dark`): the dark widget tone used for the speaking widget, the About closing widget and the Projects closing widget, with `on-ink` text and `on-ink-muted` supporting copy. In light mode it is the text ink itself; in dark mode it is deliberately lifted (0.31 lightness) above the card tone (0.235) so an ink widget reads as a raised surface on the night wallpaper instead of a hole in it. Code blocks in prose and the npm command bar in story dialogs use the same pair.
- **Bento Yellow** (`bento-yellow` / `bento-yellow-dark`, `--yellow`): the GitHub stars widget (stars across every public, non-fork repo Dani owns or has contributed to).
- **Bento Pink** (`bento-pink` / `bento-pink-dark`, `--pink`): the talks counter widget.
- **Bento Green** (`bento-green` / `bento-green-dark`, `--green`): the newsletter tile on the home screen, posts and newsletter pages.
- **On Bright** (`on-bright`): the near-black violet ink set on every bright bento tile, for headings, body (at 75% to 80% opacity for supporting lines) and icons. It is also the Subscribe button fill on the green tile and its focus ring colour. It does not change at night; the three bento fills drop about 0.02 lightness instead so they do not glare on the night wallpaper.

The bento tones are fills for whole tiles, one tile per tone on the home screen. They never colour text, links or borders.

### Tertiary: section tints
Each site section owns one tint and one glyph (`src/constants/sections.ts`). The tint is the app icon colour of that section wherever the section appears: its dock key, the icon in its sheet header, and section-branded controls.
- **Blog Tangerine** (`tint-blog`), glyph book, white ink.
- **Newsletter Jade** (`tint-newsletter`), glyph mail, white ink. The newsletter tile itself is Bento Green, not this tint, and carries no icon.
- **Speaking Magenta** (`tint-speaking`), glyph mic, white ink; also the fallback fill for a talk without a thumbnail.
- **Projects Cobalt** (`tint-projects`), glyph grid, white ink.
- **About Iris** (`tint-about`), glyph user, white ink.
- **Uses Graphite** (`tint-uses`), glyph laptop, white ink.
- **Now Marigold** (`tint-now`), glyph pulse, dark ink (`tint-ink`) because white fails on yellow.
- **Resume Slate** (`tint-resume`), glyph file, white ink; Resume is a section but not a dock key.
- **Home Key Lilac** (`tint-home`), glyph home, dark ink; used only for the dock's Home key.

Section tints are fixed hex values and do not change between themes: an app icon is the same colour in light and dark, as on a real phone.

### Neutral
- **Lavender Wallpaper / Deep Ink Wallpaper** (`wallpaper`, `wallpaper-dark`): the page ground. Also the browser theme colour (`#EAE8FB` light, `#16141F` dark in the meta tags).
- **Widget White / Raised Ink** (`card`, `card-dark`): widgets, the folder panel, the email field inside the green newsletter tile, and the backing of mark and glyph icons without a tint.
- **Sheet White / Sheet Ink** (`sheet`, `sheet-dark`): the app sheet and story dialog surface. At night it sits a step below the card tone so widgets placed inside a sheet still rise.
- **Lilac Wash / Slate Wash** (`muted`, `muted-dark`): chips, tech pills, icon buttons, row hover fills, inline code and blockquotes.
- **Violet Ink Text / Moonlit Text** (`foreground`, `foreground-dark`): primary text; also the solid button fill and the chip hover fill.
- **Dusk Gray / Haze Gray** (`muted-foreground`, `muted-foreground-dark`): ledes, dates, descriptions, counts, footer links.
- **Ink Hairline / Light Hairline** (`hairline`, `hairline-dark`): the only divider, a 9% line between list rows, under section headings, the footer rule and the dock's Home divider.
- **Frosted Folder / Smoked Folder** (`folder`, `folder-dark`): the translucent folder tile (55% white by day, 10% white at night). This is a flat translucency, not a blur.
- **Dock White / Dock Slate** (`dock`, `dock-dark`): the dock and the App Library popover are opaque in both themes; at night this is the lightest neutral surface so it reads above everything it floats over.

### Named Rules
**The One Blue Rule.** Blue means live or actionable: links, focus, selection, the all-work widget, the Active badge, the primary link in a story dialog. It never decorates. Yellow, pink and green are the bento tones that share the tile grid with it, but they mark a stat or feature tile, never state or an action.

**The Bento Tone Rule.** A bright bento tile is one flat fill with `on-bright` ink, used for a single stat or feature (stars, talks, newsletter). One tile per tone on a screen; never a bento tone as text, a link colour or an accent stripe.

**The Icon Owns Its Colour Rule.** Hue on the home screen comes from app icons, photos, section tints and the bento tiles. Neutrals stay in the 285 to 290 hue band and never compete.

**The Tint Is The Section Rule.** A section's tint and glyph appear together, everywhere that section is represented. Never recolour a section, and never borrow another section's tint for unrelated UI.

## Typography

**Display Font:** Archivo Variable (with Hanken Grotesk Variable, sans-serif)
**Body Font:** Hanken Grotesk Variable (with ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** ui-monospace, "SF Mono", Menlo, used only for `npm i <package>` lines on the Projects sheet and in the story dialog command bar

**Character:** Archivo at weight 800 with tight negative tracking gives headings the chunky, friendly weight of a phone's large titles; Hanken Grotesk is warm and very legible at the small sizes icon labels and widgets need.

### Hierarchy
The ramp is registered as Tailwind theme sizes and with tailwind-merge (`src/utils/cn.ts`) so a ramp size and a text colour never cancel each other.
- **Display** (Archivo 800, 48px, 0.95, -0.03em): the hello widget name and every sheet h1 from md up.
- **Stat** (Archivo 800, 44px, 1, -0.03em): the single big number in a counter widget (talks).
- **Heading** (Archivo 800, 28px, 1.05, -0.025em to -0.03em): sheet h1 on mobile, the story dialog h1 at every width, folder panel titles, section headings inside sheets, the Now page's latest date.
- **Title** (Archivo 800, 20px, 1.2, -0.02em): widget titles, project names, talk titles, year headings, stat numbers in rows.
- **Lede** (Hanken 400, 17px, 1.5): the line under a sheet h1 (max 60ch) and post titles in the blog list (bold).
- **Prose** (Hanken 400, 17px, 1.75, 68ch): long-form posts, newsletter issues and About copy; prose h2/h3 switch to Archivo 800 at -0.02em, links are 600 weight with a 2px underline at 35% primary that fills on hover.
- **Body** (Hanken 400 to 700, 15px, 1.55): descriptions, list items, widget copy.
- **Label** (Hanken 600 to 700, 13px, 1.3): icon names (600, centred, max 6.5rem), chips, buttons, the status bar clock.
- **Caption** (Hanken 600 to 700, 12px, 1.4): secondary lines in rows, tags, small pill buttons.
- **Meta** (Hanken 600, 11px, 1.4, tabular): dates as `YYYY.MM.DD`, counts inside chips, small platform labels.

### Named Rules
**The Heavy Headline Rule.** Every heading is Archivo at 800 with negative tracking between -0.02em and -0.03em, balanced with `text-wrap: balance`. Text below title size is always Hanken.

**The Ramp Only Rule.** Sizes come from the nine-step ramp (11, 12, 13, 15, 17, 20, 28, 44, 48px). Nothing is set in uppercase, and no letter-spaced small caps are used as section labels.

**The Tabular Time Rule.** Every `time` element and every count renders with tabular figures so dates and numbers align in columns.

## Layout

**Container.** Status bar, main and footer share one column: max 1200px, 16px side gutter, 32px from md (768px). The footer adds 112px (128px from md) of bottom padding so the fixed dock never covers content.

**The home screen grid.** A dense-flow CSS grid of fixed-height rows:
- **Base (under 640px):** 4 columns, rows of 6.75rem (108px), 8px column gap and 12px row gap. The hello widget spans 4x2, app icons and folders take one cell each, photo and stat widgets take 2 columns, writing and connect span the full width.
- **sm (640px):** 6 columns; hello and the speaking photo sit side by side at 3x2.
- **md (768px):** gaps grow to 16px both ways; still 6 columns.
- **lg (1024px):** 8 columns, rows of 7.5rem (120px), and explicit placement takes over: hello widget at columns 1 to 3 over rows 1 and 2, six app icons in a 3x2 block at columns 4 to 6, the speaking photo at columns 7 and 8; row 3 holds the Google Rust Style Guide icon, the AI Tools, Open Source and Earlier Work folders, the blue all-work widget (3 wide) and the yellow GitHub stars widget; rows 4 and 5 hold the pink talks counter over the hike photo, the cosplay photo (2x2) and Latest writing (4x2). More posts, Work, Speaking, a market photo, Connect (full width) and the green newsletter tile (full width) follow.

Icons and folders sit at the top of their cell with 4px top padding and a label beneath; the cell height leaves room for two-line names.

**App sheets.** A sheet fills the container. Long reads narrow it: posts and newsletter issues cap at 60rem with a 68ch prose column, the resume at 880px. Inside a sheet, sections stack with 48px gaps (56px from md), section headings sit on a hairline, and lists use 1 or 2 columns from sm or md.

**Story dialogs.** An app's story (`/app/<slug>/`) renders the full home screen behind it, inert and decorative, under a fixed scrim. On phones the panel is anchored 12px from the bottom and both sides, grows to the height of its content and caps at the viewport minus 4.5rem, scrolling inside itself. From md it is centred in the viewport at `min(92vw, 38rem)` wide, capped at the viewport minus 7rem. Its prose story keeps a 65ch measure.

**Breakpoints in use:** Tailwind defaults sm 640px, md 768px, lg 1024px.

### Named Rules
**The Grid Is The Screen Rule.** Home screen content lives in grid cells, never in free-flowing sections. A new tool is a new icon or a folder entry, not a new block of prose.

## Elevation & Depth

The system is flat and tonal. Surfaces separate by lightness alone: wallpaper below, opaque widgets above; at night the ink widget and the dock are lifted to lighter tones than the cards so the stacking order still reads. There are no borders on widgets and no drop shadows on cards, icons or sheets.

### Shadow Vocabulary
- **Dock lift** (`box-shadow: 0 14px 40px -18px rgb(30 20 80 / 45%)`): the one cast shadow in the system, a soft violet lift that floats the fixed dock over scrolling content. The App Library popover is the dock's own surface opened upward, so it carries the same lift.
- **Night halo on native icons** (`filter: drop-shadow(0 0 0.75px rgb(255 255 255 / 45%))`): dark mode only, on app-kind icons, so a dark icon's silhouette does not dissolve into the night wallpaper.
- **Night rim on squircles** (`box-shadow: inset 0 0 0 1px rgb(255 255 255 / 12%)`): dark mode only, on every non-native squircle (bleed, mark, glyph and section icons), for the same reason.
- **Scrims** (`oklch(0.2 0.03 285)` at 35%, 32% or 30%): the backdrop behind an open folder (35%, faded in over 0.4s), behind a story dialog (32%, faded in over 0.35s as its own view transition layer) and behind the App Library (30%, over 0.35s). Scrims are flat colour, never a blur.

### Named Rules
**The Single Lift Rule.** Only the dock, and the App Library that opens out of it, casts a shadow. Everything else, including story dialogs, is lifted by tone and scrim.

## Shapes

The form language is the phone's: squircles for apps, big soft rectangles for widgets, full pills for everything you press.
- **App squircle** (22.5% radius): every icon, folder tile and company logo tile. Icons that are not native app art are drawn on an inset squircle with a 9.6% margin on each side, the same margin macOS bakes into its icon canvas, so a generated icon and a downloaded app icon line up exactly.
- **Widget** (1.75rem): widgets, app sheets, story dialogs, the folder panel, the App Library and the newsletter tile.
- **Dock** (1.5rem on mobile, 1.75rem from md).
- **Inner rows and media** (1.5rem): hover fills on list rows, talk thumbnails, connect tiles, the story dialog command bar. Prose images, code blocks and blockquotes use 1rem; inline code 0.5rem, the smallest step of the rounded scale.
- **Pill** (full): chips, buttons, inputs, icon buttons, tags, status badges and the dock's active dot.

## Components

### App Icon
The signature primitive (`AppIcon.astro`). Four canvas sizes: 28px (folder preview), 56px (dock and lists), 72px and 88px (home screen and Projects), each including the 9.6% margin. Five art kinds:
- **app**: the project's own icon file, already drawn on the macOS canvas with its margin, rendered as is. BrowserOS, aalai, Agent Terminal, herbie.
- **bleed**: a full-bleed image cropped into the inset squircle (`object-fit: cover`). Screen Time Overlay.
- **mark**: a logo centred at 64% of the squircle on a light tint (or the card colour when no tint is given). stylecn on white, Google Rust Style Guide on a warm cream `#FFF6EE`.
- **glyph**: a single-colour vector logo applied as a CSS mask at 52% of the squircle, painted in an ink colour on the logo's own brand tint. Used for projects without app art: npm packages (`#CB3837`, white), TypeScript (`#3178C6`, white), shell projects via the GNU Bash mark (`#4EAA25`, white), Svelte (`#FF3E00`, white), React (`#20232A`, `#61DAFB`), JavaScript (`#F7DF1E`, `#1A1A1A`) and Git (`#F05032`, white). These are vector logo files, never text characters.
- **section**: a site glyph from `Icon.astro` at 52% on the section tint with the section ink.
- **States:** icons lift 4px on hover and scale to 0.9 on press (0.3s, expo ease-out); on Projects rows they lift 2px and press to 0.95.
- **Destination:** every catalog icon (home screen, folder rows, Projects rows) links to its story dialog at `/app/<slug>/`, never straight off-site; the dialog holds the outbound link. The icon's squircle is marked as the morph source for navigation (see Motion).

**Provenance.** App icons were downloaded from each project's own repository into `public/apps/`: BrowserOS, aalai, Agent Terminal, herbie, Screen Time Overlay, stylecn and Google Rust Style Guide. Language and npm glyphs (`public/apps/lang/`: git, gnubash, javascript, npm, react, svelte, typescript) come from Simple Icons 16.19.0 under CC0. Full-colour tech logos for the all-work widget (`public/tech/`) come from svgl (svgl.app), light variants, downloaded 2026-11-07; they are the projects' own brand marks. The catalog (`src/content/project/projects.json`) records each project's icon kind, source, tint and ink, and sorts projects into four categories: `app` (home screen icons), `ai-tool` and `oss` (the AI Tools and Open Source folders) and `earlier` (the Earlier Work folder). Each catalog entry with an icon gets a story file at `src/content/apps/<slug>.mdx` (27 today); a file that holds only its MDX comment counts as empty and shows no story.

### Folder
A translucent squircle (72px, 88px from md; 11px or 13px padding) previewing up to nine member icons at 28px in a 3x3 grid, with the folder name beneath. It lifts 2px on hover and presses to 0.9.
- **Open:** a native `popover` panel (card colour, widget radius, `min(92vw, 44rem)`, 20px or 28px padding) with an Archivo heading, a 40px round close button, and every member as a row: 48px icon, bold name, two-line caption description. Rows fill with the muted wash on hover, and each row opens that app's story dialog.
- **Motion:** the panel grows out of the tile it was opened from. On click the tile's centre offset from the viewport centre is written to `--folder-dx` / `--folder-dy`; the panel starts at that offset at scale 0.2 and opacity 0, then translates and scales to centre over 0.5s and fades in over 0.3s on the expo curve, using `@starting-style` and discrete `display`/`overlay` transitions. The backdrop scrim fades to 35% over 0.4s. Escape and the close button reverse it.

### Widget
The home screen's container (`Widget.astro`): 1.75rem radius, 16px padding (20px from md), clipped, no border. Tones:
- **plain** (card): hello, stars, Latest writing, More from the blog, Work, Connect.
- **blue** (live blue, on-blue text): the all-work widget and the Now page latest entry. All work is titled "Everything I've built" and shows the tech stack, not counts: twelve language, runtime and framework logos (TypeScript, Rust, Kotlin, Swift, Python, Bun, React, Expo, Tauri, Svelte, Astro, Hono) on white 22.5% squircles, 44px on phones (two rows of six) and 26px in one row from lg; the whole tile opens Projects. The home screen already shows app icons, so this tile shows the tools behind them. Neither the home screen nor Projects shows project or category counts.
- **ink** (ink, on-ink text): speaking blurb, About and Projects closing widgets.
- **yellow** (bento yellow, on-bright text): the GitHub stars widget.
- **pink** (bento pink, on-bright text): the talks counter, with its caption at 75% opacity.
- **green** (bento green, on-bright text): available as a tone; the newsletter tile (`Newsletter.astro`) uses the same fill and ink as its own component.
- **photo** (muted backing, zero padding): a candid photo filling the widget with `object-fit: cover` and a per-photo focal point. Four sit on the home screen; the desk photo with Dani's cat leads the About sheet at its natural 1080:565 ratio, uncropped. The hello widget's avatar is the portrait (`avatar.jpg`), zoomed 1.6x from the top left inside a circle so the face is centred.
- **Linked widgets** press to 0.98 and nudge their arrow 2px right on hover.

### App Sheet
Every inner page (`AppSheet.astro`): sheet surface, widget radius, 16px padding (32px from md). The sheet is the zoom target for navigation (`data-zoom-target`) and carries the `vt-sheet` class, which names it `sheet-body` for push and pop slides. The header is a three-column grid: the section's app icon (56px, 72px from md, spanning two rows on desktop), the h1 (heading, display from md), and a 40px round close button that returns to the home screen and inverts to foreground on hover. An optional lede and a header slot sit under the title. Posts and newsletter issues get an automatic back link (Signal Blue, bold label, chevron, rounded hover fill) to Blog or Newsletter. Content begins 24px (32px from md) below the header. Print hides the close and back controls.

### Story Dialog
An app opened from the home screen (`src/pages/app/[slug].astro`, one route per catalog app with an icon). The home screen renders behind it as an inert, decorative copy (its name drops from h1 to a paragraph), under a full-viewport scrim link that closes the dialog.
- **Panel:** `role="dialog"`, `aria-modal`, sheet surface, widget radius, 20px padding (28px from md), scrolling inside itself; placement per Layout. It is the zoom target the tapped icon morphs into.
- **Header:** the app's own icon (80px, 88px from md), the name as an Archivo heading, a label line of kind and language ("AI tool · TypeScript") in muted semibold, and a 40px round close button.
- **Body, in order:** the description as a lede (60ch); tech pills (muted wash, caption semibold, full pill); for npm packages, an ink command bar (1.5rem radius) with `npm i <package>` in mono label and a Copy pill (white at 10%, 20% on hover) that flips to "Copied" for 1.6s; the primary link as a Live Blue pill button with an up-right arrow ("View on GitHub" for repos, the link's own label otherwise); the optional MDX story as prose under a hairline (hidden while the story file holds only its comment); and a "More apps / More AI tools / More open source / More earlier work" strip under a hairline, up to four sibling apps from the same category as 56px icons with two-line caption names in a 4-column grid.
- **Behaviour:** Escape, the close button and the scrim close it. Closing returns with `history.back()` when the dialog was opened from another page on the site, and goes home otherwise. While open, the dock, status bar and footer are made inert so focus stays inside; focus starts on the close button.

### Dock
Fixed 12px from the bottom (20px from md), centred, opaque dock colour, 6px padding (8px from md), the single lift shadow. It is persisted across navigations (`transition:persist`), so it never reloads or animates between pages, and its active dot is re-synced on every page load. The Home key (lilac tint, dark ink) leads, split from the sections by a hairline. Then Blog, Newsletter, Speaking, Projects, About, Uses, Now as section icons at 48px (56px from md). On phones only Home, Blog, Projects and About stay, followed (after a hairline) by an "All apps" key: a lilac squircle with a 3x3 dot glyph. Hover lifts 4px, press scales to 0.9, and a 4px foreground dot under an icon marks the current section (`aria-current="page"`). Labels are screen-reader only with a native title tooltip.

### App Library
The phone dock's overflow (`#app-library`, a native `popover`, hidden from md). It sits 12px from each side just above the dock, on the dock surface with the widget radius, 16px padding and the dock lift. An Archivo title "App Library" and a 36px round close button head a 4-column grid of all eight sections (Resume included) as 56px section icons with caption names. It slides up 24px and scales from 0.96 with a fade (0.45s and 0.25s, expo ease) over a 30% scrim, and closes itself without animation before a navigation swaps the page.

### Status Bar
The top row of every page, persisted across navigations like the dock: the `dani_akash_` wordmark in Archivo 800 (links home, turns Signal Blue on hover), a live Chennai clock in label size with tabular figures (from sm), and the theme toggle, a 40px round button showing a moon in light and a sun in dark, filling with the card colour on hover. The theme is applied before first paint from storage or the system preference.

### Chips and Pills
- **Filter chip:** muted wash, label bold, 36px minimum height, 14px side padding, full pill; a meta-size count at 60% opacity may follow. Hover inverts to foreground fill with wallpaper text. Used for category, year and section jump links and the RSS link.
- **Tag:** muted wash, muted text, caption or meta semibold, 8px to 10px padding. On a hovered row it switches to the card colour so it stays visible.
- **Status badge:** meta bold pill; Active is live blue on on-blue, others muted.

### Buttons
- **Solid:** foreground fill, wallpaper text, label bold, 40px, full pill; hover turns Signal Blue. (Resume button.)
- **On-tone:** inside a coloured widget, the button takes the widget's text colour as fill and the widget colour as text (on-ink on ink, on-blue on blue); hover drops to 85% opacity.
- **Blue primary:** Live Blue fill, on-blue label bold, 44px, 20px side padding, full pill, trailing up-right arrow; hover 90% opacity. The one outbound action in a story dialog.
- **Subscribe:** on-bright fill, white label bold, 44px, full pill, on the green newsletter tile; hover 90% opacity.
- **Icon button:** 40px circle, muted wash, inverts to foreground on hover (sheet and folder close). Social icons are 32px to 36px circles that fill on hover.

### Inputs
Email field: it lives on the green newsletter tile, so it is a card-colour pill (card text, muted placeholder), body size, 44px, 16px side padding, no border; focus draws a 3px on-bright outline at 2px offset, since Signal Blue would vanish on green. The label is visually hidden but present. The tile itself is the bento green fill with on-bright text, an Archivo title and an 80% opacity description; it has no icon.

### Rows and Lists
List rows (posts, projects, uses, folder members) are full links with a 1.5rem hover fill in the muted wash, separated by hairlines. Projects rows for catalog apps open the story dialog and end in a Signal Blue "Open" label with an arrow; rows without an icon keep their own outbound link label. Dates sit in a fixed-width meta column. Talk cards are a 16:9 thumbnail at 1.5rem radius that zooms to 1.03 over 0.5s on hover, with a white play disc for videos.

### UI Icons
Interface glyphs (`Icon.astro`) are 24px-viewBox line icons drawn with a 1.75 stroke, round caps and joins, in `currentColor`; brand marks (GitHub, X, Bluesky, LinkedIn, Instagram) are filled. Inline sizes are 14px next to labels, 16px for social links and 18px in round buttons; inside a section app icon the glyph takes 52% of the squircle.

### Footer
A hairline rule, then every section (including Resume) as muted label links, social icons as 36px circles, and a caption copyright line.

## Motion

Two curves, two jobs. **Expo** (`--ease-expo` / Tailwind `ease-out-expo`, `cubic-bezier(0.16, 1, 0.3, 1)`) drives in-place physics: icon lifts and presses, arrow nudges, the folder zoom and the App Library. **Native** (`--ease-native`, `cubic-bezier(0.2, 0.9, 0.1, 1)`) drives navigation, a firmer settle that reads like an iOS spring.

### Navigation
Pages navigate through Astro's `ClientRouter` with view transitions. `src/scripts/transitions.ts` classifies every navigation into one of six kinds and writes it to `html[data-astro-transition]`, where the view transition rules in `global.css` pick it up:
- **app-open / app-close:** home screen to a story dialog and back (also dialog to dialog). The home screen stays perfectly still: the root does not animate, only the dialog morphs and the scrim fades (in 0.35s, out 0.25s). The scroll position where the tap happened is kept.
- **zoom-in / zoom-out:** an icon or dock key grows into a section's app sheet, and the sheet shrinks back on the way out (also used between a dialog and a non-home page). On zoom-in the old page recedes to scale 0.94, 40% opacity and a 2px blur over 0.45s while the new page fades in after 0.12s; zoom-out reverses it, the old page fading in 0.22s and the home screen advancing out of the receded state over 0.45s.
- **push / pop:** list and detail inside one section (Blog to a post). Only the sheet slides: push sends the old sheet 24% left (0.32s) and brings the new one in from 60% right (0.42s); pop mirrors it, the old sheet leaving 60% right (0.26s) and the new arriving from 24% left (0.34s), all with a fade.

### The shared element
There is exactly one shared view transition name, `app-zoom`, assigned at runtime because the same icon can appear on many pages. On the way in it goes on the tapped icon's squircle and on the destination's `[data-zoom-target]` (the AppSheet or the story dialog panel). On the way out it goes on the closing sheet or dialog and on the return target in the new page: the icon linking to the closed page, or, for an app that lives in a folder, the folder tile; failing both, the section's key in the persisted dock. Names are cleared only once the view transition has finished, so the morph always has a new image to fly to. A sheet already scrolled above the viewport sits out the morph and the page crossfade carries it.

The morph group runs 0.5s on the native curve for entrances; the old image fades out over 0.2s and the new fades in over 0.35s. Closes run 0.52s on the close curve (`cubic-bezier(0.3, 0.4, 0.15, 1)`): the sheet, dialog or folder stays fully visible while it shrinks, fades over 0.18s from 0.2s as it lands, and the icon fades in over 0.16s from 0.22s. A front-loaded curve on a close reads as a snap, so closes never use the native curve. A sheet scrolled past its top cannot morph; it closes by shrinking the whole visible page into the icon with squircle corners, painted solid above the incoming page. Folders open and close with the same morph (`folder-zoom`) as apps.

### Chrome stays still
The dock (`app-dock`) and status bar (`status-bar`) are persisted with `transition:persist` and given their own names, with their groups and new images unanimated and their old images hidden. They never recede, fade or slide; only the page under them moves.

### Reduced motion
Under `prefers-reduced-motion: reduce`, no view transition group moves or scales; every navigation becomes a 0.15s crossfade, and the dock and status bar stay completely still. All other animations and transitions collapse to near zero.

### Named Rules
**The Same Way Back Rule.** Whatever opened a view closes it in reverse: a sheet shrinks into the icon that opened it, a folder app returns into its folder tile, a section returns into its dock key.

**The Still Chrome Rule.** The dock and status bar are the phone's hardware. They never take part in a page transition.

## Do's and Don'ts

### Do:
- **Do** put every new tool, library or app on the home screen as an icon or inside a folder, using its real icon from its repository when one exists; otherwise a mark or glyph icon on the project's language or registry tint.
- **Do** draw every non-native icon on the inset squircle (22.5% radius, 9.6% margin) so it aligns with downloaded app art.
- **Do** record the provenance of every shipped raster or icon file (repository or Simple Icons version and licence).
- **Do** open every inner page as an AppSheet with its section icon, h1 and close button, and keep the dock on every page.
- **Do** open every catalog app as its story dialog over the home screen, with its outbound link as the single Live Blue button inside it.
- **Do** use the expo ease (`cubic-bezier(0.16, 1, 0.3, 1)`) for lifts, presses and arrow nudges: 0.3s. Use the native ease (`cubic-bezier(0.2, 0.9, 0.1, 1)`) for opening navigation and the close ease (`cubic-bezier(0.3, 0.4, 0.15, 1)`) for closes, so a shrink stays readable.
- **Do** mark a new page's main surface as the zoom target (`data-zoom-target`) and its tappable icon as the morph source, so navigation reads as one object moving.
- **Do** put `on-bright` ink on every yellow, pink or green tile, and give inputs on a bright tile an `on-bright` focus ring.
- **Do** give icons the press physics: lift on hover, scale to 0.9 on press; widgets that link press to 0.98.
- **Do** keep touch targets at 36px minimum for chips and links and 40px for icon buttons.
- **Do** design both themes together; at night, lift ink widgets and the dock above the card tone and rim icons so they do not sink.
- **Do** let `prefers-reduced-motion` collapse every animation and transition (navigation becomes a 0.15s crossfade), and hide the status bar, dock and footer when printing.

### Don't:
- **Don't** add shadows to widgets, icons, sheets or dialogs; the dock and its App Library are the only surfaces that cast one.
- **Don't** use glass, backdrop blur or gradients; the folder tile is a flat translucency and scrims are flat colour. The 2px blur on a receding page exists only for the length of a zoom transition.
- **Don't** add borders to widgets; separate by tone, and keep hairlines for list rows and section rules.
- **Don't** use blue for decoration; it is reserved for live state, links, focus and the primary action.
- **Don't** use a bento tone (yellow, pink, green) for text, links, borders or state, or repeat one tone across tiles on the same screen.
- **Don't** animate the dock or status bar between pages, or give a second element the `app-zoom` name.
- **Don't** recolour a section's tint or pair a section glyph with another tint.
- **Don't** set sizes outside the ramp or set labels in uppercase with letter-spacing.
- **Don't** use emoji or text characters as icons; glyph icons are vector logo masks.
- **Don't** invent catalog entries; an icon on the screen must be a real public repo or a package verified on the registry.
