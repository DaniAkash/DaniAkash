import { useCallback, useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-1 font-mono text-muted-foreground text-xs transition-all hover:bg-foreground/5 hover:text-foreground"
    >
      <span>{isDark ? "◑" : "◐"}</span>
      <span>{isDark ? "DARK" : "LIGHT"}</span>
    </button>
  );
}
