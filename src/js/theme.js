const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const root = document.documentElement;
const themeTabCont = document.getElementById("themeTabCont");
const themeTab = document.getElementById("themeTab");
const left = "fa-circle-chevron-left";
const right = "fa-circle-chevron-right";

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

themeTab.addEventListener("click", (e) => {
  const direction = e.target.classList[1].split("-")[3];
  if (direction === "left") {
    e.target.classList.remove(left);
    e.target.classList.add(right);
    themeTabCont.classList.add("active");
    return;
  }
  e.target.classList.remove(right);
  e.target.classList.add(left);
  themeTabCont.classList.remove("active");
});
