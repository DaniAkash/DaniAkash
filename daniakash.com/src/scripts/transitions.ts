/**
 * Native-app-like navigation for the home screen world.
 *
 * Every navigation is classified, and the class is written to `event.direction`, which the
 * ClientRouter mirrors onto `html[data-astro-transition]` for the CSS in global.css:
 *   app-open / app-close  any page <-> /app/<slug> story dialog (the opener stays put behind it)
 *   zoom-in / zoom-out    an icon grows into a section's app sheet, and shrinks back
 *   push / pop            list <-> detail inside one section (blog -> post)
 * The shared element always uses the single view-transition-name `app-zoom`, because names must
 * be unique per page while the same icon can appear on many pages.
 *
 * A story dialog is drawn over the page that opened it: on app-open the opener's live content is
 * carried under the dialog with Astro's own persist swap, and on closing back to that page it is
 * carried home again. A direct load of /app/<slug> draws the home screen instead.
 */

const ZOOM = "app-zoom";
const PERSIST = "data-astro-transition-persist";
const CARRY = "app-backdrop";

type Kind = "app-open" | "app-close" | "zoom-in" | "zoom-out" | "push" | "pop";

const sectionOf = (path: string): string => {
  const first = path.split("/").filter(Boolean)[0] ?? "";
  return first === "posts" ? "blog" : first;
};

const depthOf = (path: string): number => {
  const parts = path.split("/").filter(Boolean);
  return parts[0] === "posts" ? 2 : parts.length;
};

const isApp = (path: string) => path.startsWith("/app/");
const isHome = (path: string) => path === "/" || path === "";
const samePath = (a: string, b: string | undefined) =>
  b !== undefined && a.replace(/\/+$/, "") === b.replace(/\/+$/, "");

/** Closing onto the page drawn under the dialog keeps it still; anywhere else zooms out. */
function classifyApp(to: string, under: string | undefined): Kind {
  if (isApp(to)) return "app-open";
  return samePath(to, under) ? "app-close" : "zoom-out";
}

function classify(
  from: string,
  to: string,
  back: boolean,
  under: string | undefined,
): Kind {
  if (isApp(from) || isApp(to)) return classifyApp(to, under);
  const section = sectionOf(from);
  if (section && section === sectionOf(to)) {
    const deeper = depthOf(to) - depthOf(from);
    return deeper > 0 || (deeper === 0 && !back) ? "push" : "pop";
  }
  if (isHome(to) || back) return "zoom-out";
  return "zoom-in";
}

let kind: Kind | null = null;
let fromPath = "";
let lastPath = "";
let savedScroll = 0;
let traversal = false;
let inFlight = false;
let shrinkPage = false;

/** The path of the page this one was reached from in this session, if any. */
export const previousPath = () => lastPath;

const clearNames = (root: ParentNode) => {
  for (const el of root.querySelectorAll<HTMLElement>("[data-vt-named]")) {
    el.style.viewTransitionName = "";
    el.removeAttribute("data-vt-named");
  }
};

const name = (el: Element | null | undefined) => {
  if (!(el instanceof HTMLElement)) return;
  el.style.viewTransitionName = ZOOM;
  el.setAttribute("data-vt-named", "");
};

/** Takes an element (and its class-given name) out of the morph for one navigation. */
const unname = (el: Element | null | undefined) => {
  if (!(el instanceof HTMLElement)) return;
  el.style.viewTransitionName = "none";
  el.setAttribute("data-vt-named", "");
};

/** The page content drawn under the current story dialog, if any. */
const underlay = (root: ParentNode = document) =>
  root.querySelector<HTMLElement>("[data-app-backdrop] > [data-page]");

/** The page's own content wrapper. */
const pageOf = (root: ParentNode) =>
  root.querySelector<HTMLElement>("main > [data-page]");

/** The open sheet or dialog; a page carried under a dialog keeps its own sheet out of it. */
const zoomTarget = (root: ParentNode) =>
  [...root.querySelectorAll<HTMLElement>("[data-zoom-target]")].find(
    (el) => !el.closest("[data-app-backdrop]"),
  ) ?? null;

/**
 * A popover cannot sit under the dialog in the top layer, so an open folder travels "held":
 * drawn open by its own CSS, outside the top layer.
 */
const holdOpenFolders = (root: ParentNode) => {
  for (const panel of root.querySelectorAll<HTMLElement>("[popover]")) {
    if (!panel.matches(":popover-open")) continue;
    panel.setAttribute("data-held", "");
    panel.hidePopover();
  }
};

/** Held folders on the page become real open popovers again, without replaying their entrance. */
const releaseHeldFolders = () => {
  for (const panel of document.querySelectorAll<HTMLElement>(
    "[popover][data-held]",
  )) {
    if (panel.closest("[data-app-backdrop]")) continue;
    panel.removeAttribute("data-held");
    panel.showPopover();
  }
};

/** The old page snapshot shrinks into the icon, iOS style, staying visible until it lands. */
const shrinkPageInto = (icon: HTMLElement) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = icon.getBoundingClientRect();
  const dx = r.left + r.width / 2 - window.innerWidth / 2;
  const dy = r.top + r.height / 2 - window.innerHeight / 2;
  const scale = r.width / window.innerWidth;
  // The page lands with the icon's squircle corners, measured before scaling.
  const radius = (r.width * 0.225) / scale;
  const target = {
    pseudoElement: "::view-transition-old(root)",
    fill: "both",
  } as const;
  try {
    document.documentElement.animate(
      [
        { transform: "none", clipPath: "inset(0 round 0px)" },
        {
          transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
          clipPath: `inset(0 round ${radius}px)`,
        },
      ],
      { ...target, duration: 520, easing: "cubic-bezier(0.3, 0.4, 0.15, 1)" },
    );
    document.documentElement.animate([{ opacity: 1 }, { opacity: 0 }], {
      ...target,
      duration: 180,
      delay: 220,
      easing: "ease-in",
    });
  } catch {
    // Without pseudo-element animation support the root crossfade still plays.
  }
};

/** Pairs two elements so Astro's swap moves the old one into the new one's place. */
const carry = (from: HTMLElement, into: HTMLElement) => {
  from.setAttribute(PERSIST, CARRY);
  into.setAttribute(PERSIST, CARRY);
};

/** app-open: the opener (or the page already under a dialog) moves under the new dialog. */
const carryUnder = (doc: Document) => {
  const opener = isApp(fromPath) ? underlay() : pageOf(document);
  const slot = underlay(doc);
  if (!opener || !slot) return;
  if (!isApp(fromPath)) {
    holdOpenFolders(opener);
    opener.dataset.backdropFrom = fromPath;
    opener.setAttribute("data-backdrop-live", "");
  }
  carry(opener, slot);
};

/**
 * app-close: a live opener moves back into its page. Returns where the dialog should shrink to;
 * a freshly loaded page gets the same folder held open so the dialog lands inside it.
 */
const carryBack = (doc: Document): ParentNode => {
  const under = underlay();
  const page = pageOf(doc);
  if (under?.hasAttribute("data-backdrop-live") && page) {
    carry(under, page);
    return under;
  }
  for (const held of under?.querySelectorAll("[popover][data-held]") ?? []) {
    doc.getElementById(held.id)?.setAttribute("data-held", "");
  }
  return doc;
};

/** The icon inside a tapped link, or the link itself. */
const iconIn = (el: Element | null | undefined) =>
  el?.querySelector("[data-vt-icon]") ?? el ?? null;

/**
 * Where a closing sheet or dialog should shrink back to on the destination page. Dock links in
 * the new document are skipped: the persisted dock replaces them during the swap.
 */
const returnTarget = (doc: ParentNode, path: string) => {
  const link = [...doc.querySelectorAll<HTMLAnchorElement>("a[href]")].find(
    (a) => {
      const href = new URL(a.getAttribute("href") ?? "", location.origin)
        .pathname;
      return (
        href === path &&
        a.querySelector("[data-vt-icon]") &&
        !a.closest("[popover]:not([data-held])") &&
        !a.closest("[data-dock]")
      );
    },
  );
  if (link) return link.querySelector("[data-vt-icon]");
  // Apps that live inside a folder shrink back into the folder tile.
  const inFolder = [...doc.querySelectorAll<HTMLElement>("[popover]")].find(
    (p) => p.querySelector(`a[href="${path}"]`),
  );
  return inFolder?.id
    ? doc.querySelector(`[data-folder-trigger][popovertarget="${inFolder.id}"]`)
    : null;
};

document.addEventListener("astro:before-preparation", (event) => {
  fromPath = event.from.pathname;
  savedScroll = window.scrollY;
  traversal = event.navigationType === "traverse";
  const back = event.direction === "back";
  kind = classify(
    fromPath,
    event.to.pathname,
    back,
    underlay()?.dataset.backdropFrom,
  );
  event.direction = kind;
  clearNames(document);
  const sheet = zoomTarget(document);
  // A sheet scrolled above the viewport would morph from far off-screen, so it sits out; on a
  // close the whole visible page shrinks into the icon instead.
  const scrolledPast = Boolean(sheet && sheet.getBoundingClientRect().top < 0);
  shrinkPage = false;
  if (kind === "app-open" || kind === "zoom-in") {
    name(iconIn(event.sourceElement));
  } else if (kind === "app-close" || kind === "zoom-out") {
    if (scrolledPast) unname(sheet);
    else name(sheet);
    shrinkPage = scrolledPast;
  } else if (scrolledPast) {
    unname(document.querySelector(".vt-sheet"));
  }
});

document.addEventListener("astro:before-swap", (event) => {
  // The old page is already captured; persisted nodes (the dock) move into the new page, so
  // clear their names first or the new page would carry the name twice and skip the morph.
  clearNames(document);
  const doc = event.newDocument;
  if (kind === "app-open") carryUnder(doc);
  if (kind === "app-open" || kind === "zoom-in") {
    name(zoomTarget(doc));
  } else if (kind === "app-close" || kind === "zoom-out") {
    const root = kind === "app-close" ? carryBack(doc) : doc;
    const target =
      returnTarget(root, fromPath) ??
      iconIn(
        document.querySelector(
          `[data-dock] a[href="/${sectionOf(fromPath)}/"]`,
        ),
      );
    name(target);
    if (shrinkPage && target instanceof HTMLElement) {
      // Astro copies the new root's attributes over during the swap.
      doc.documentElement.setAttribute("data-vt-shrink", "");
      event.viewTransition.ready.then(
        () => shrinkPageInto(target),
        () => {},
      );
    }
  }
  // page-load fires before the browser captures the new state, so names may only be cleared
  // once the transition has finished, or the morph has no new image to fly to.
  inFlight = true;
  const closing = kind === "app-close";
  event.viewTransition.finished.finally(() => {
    inFlight = false;
    document.documentElement.removeAttribute("data-vt-shrink");
    clearNames(document);
    if (closing) releaseHeldFolders();
  });
});

document.addEventListener("astro:after-swap", () => {
  lastPath = fromPath;
  for (const el of document.querySelectorAll(`[${PERSIST}="${CARRY}"]`)) {
    el.removeAttribute(PERSIST);
  }
  const page = pageOf(document);
  page?.removeAttribute("data-backdrop-live");
  page?.removeAttribute("data-backdrop-from");
  // The home screen sits behind a story dialog, so keep the scroll where the tap happened.
  if ((kind === "app-open" || kind === "app-close") && !traversal) {
    window.scrollTo({ left: 0, top: savedScroll, behavior: "instant" });
  }
});

document.addEventListener("astro:page-load", () => {
  if (!inFlight) clearNames(document);
});
