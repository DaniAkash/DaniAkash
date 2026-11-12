// Cloudflare's email obfuscation needs its decoder to run on every page, but ClientRouter runs a
// script src only once per session, which left "[email protected]" after the second visit.
document.addEventListener("astro:before-swap", (event) => {
  for (const script of event.newDocument.querySelectorAll(
    'script[src*="/cdn-cgi/scripts/"][src*="email-decode"]',
  )) {
    script.setAttribute("data-astro-rerun", "");
  }
});
