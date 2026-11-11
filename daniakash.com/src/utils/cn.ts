import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Without this, tailwind-merge reads the custom ramp sizes (text-body, ...) as colours and drops them next to a text colour class.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "meta",
        "caption",
        "label",
        "body",
        "lede",
        "title",
        "heading",
        "display",
        "stat",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
