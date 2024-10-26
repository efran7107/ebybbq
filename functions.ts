const navbar: HTMLElement = document.getElementById("navbar")!;

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
    return;
  } else {
    navbar.classList.remove("scroll");
  }
});
