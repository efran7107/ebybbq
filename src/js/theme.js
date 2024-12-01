const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const root = document.documentElement;

if (isDark) {
  root.classList.add("dark");
}
