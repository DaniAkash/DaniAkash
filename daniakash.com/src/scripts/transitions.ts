/**
 * Native-app-like navigation for the home screen world.
 *
 * Every navigation is classified, and the class is written to `event.direction`, which the
 * ClientRouter mirrors onto `html[data-astro-transition]` for the CSS in global.css:
 *   app-open / app-close  home screen <-> /app/<slug> story dialog (home stays put behind it)
 *   zoom-in / zoom-out    an icon grows into a section's app sheet, and shrinks back
 *   push / pop            list <-> detail inside one section (blog -> post)
 * The shared element always uses the single view-transition-name `app-zoom`, because names must
 * be unique per page while the same icon can appear on many pages.
 */

const ZOOM = "app-zoom";

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

/** Story dialogs sit on the home screen, so only home <-> dialog keeps the background still. */
function classifyApp(from: string, to: string, back: boolean): Kind {
  if (isApp(from) && isApp(to)) return back ? "app-close" : "app-open";
  if (isApp(to)) return isHome(from) ? "app-open" : "zoom-in";
  if (isHome(to)) return "app-close";
  return back ? "zoom-out" : "zoom-in";
}

function classify(from: string, to: string, back: boolean): Kind {
  if (isApp(from) || isApp(to)) return classifyApp(from, to, back);
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

/** The icon inside a tapped link, or the link itself. */
const iconIn = (el: Element | null | undefined) =>
  el?.querySelector("[data-vt-icon]") ?? el ?? null;

/**
 * Where a closing sheet or dialog should shrink back to on the destination page. Dock links in
 * the new document are skipped: the persisted dock replaces them during the swap.
 */
const returnTarget = (doc: Document, path: string) => {
  const link = [...doc.querySelectorAll<HTMLAnchorElement>("a[href]")].find(
    (a) => {
      const href = new URL(a.getAttribute("href") ?? "", location.origin)
        .pathname;
      return (
        href === path &&
        a.querySelector("[data-vt-icon]") &&
        !a.closest("[popover]") &&
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
  kind = classify(fromPath, event.to.pathname, back);
  event.direction = kind;
  clearNames(document);
  const sheet = document.querySelector<HTMLElement>("[data-zoom-target]");
  // A sheet scrolled above the viewport would morph from far off-screen, so it sits out and
  // the root crossfade carries it instead.
  const scrolledPast = Boolean(sheet && sheet.getBoundingClientRect().top < 0);
  if (kind === "app-open" || kind === "zoom-in") {
    name(iconIn(event.sourceElement));
  } else if (kind === "app-close" || kind === "zoom-out") {
    if (scrolledPast) unname(sheet);
    else name(sheet);
  } else if (scrolledPast) {
    unname(document.querySelector(".vt-sheet"));
  }
});

document.addEventListener("astro:before-swap", (event) => {
  // The old page is already captured; persisted nodes (the dock) move into the new page, so
  // clear their names first or the new page would carry the name twice and skip the morph.
  clearNames(document);
  const doc = event.newDocument;
  if (kind === "app-open" || kind === "zoom-in") {
    name(doc.querySelector("[data-zoom-target]"));
  } else if (kind === "app-close" || kind === "zoom-out") {
    const target =
      returnTarget(doc, fromPath) ??
      iconIn(
        document.querySelector(
          `[data-dock] a[href="/${sectionOf(fromPath)}/"]`,
        ),
      );
    name(target);
  }
  // page-load fires before the browser captures the new state, so names may only be cleared
  // once the transition has finished, or the morph has no new image to fly to.
  inFlight = true;
  event.viewTransition.finished.finally(() => {
    inFlight = false;
    clearNames(document);
  });
});

document.addEventListener("astro:after-swap", () => {
  lastPath = fromPath;
  // The home screen sits behind a story dialog, so keep the scroll where the tap happened.
  if ((kind === "app-open" || kind === "app-close") && !traversal) {
    window.scrollTo({ left: 0, top: savedScroll, behavior: "instant" });
  }
});

document.addEventListener("astro:page-load", () => {
  if (!inFlight) clearNames(document);
});
