document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.getElementById("navbar")!.classList.add("scroll");
    return;
  }
  document.getElementById("navbar")!.classList.remove("scroll");
});
