const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const root = document.documentElement;

const theme = localStorage.getItem("theme");
if (!theme) {
  if (isDark) {
    if (!root.classList.contains("dark")) {
      root.classList.remove("light");
    }
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    if (!root.classList.contains("light")) {
      root.classList.remove("dark");
    }
    root.classList.add("light");
    localStorage.setItem("theme", "light");
  }
} else {
  if (theme === "dark") {
    if (!root.classList.contains("dark")) {
      root.classList.remove("light");
    }
    root.classList.add("dark");
  } else {
    if (!root.classList.contains("light")) {
      root.classList.remove("dark");
    }
    root.classList.add("light");
  }
}
