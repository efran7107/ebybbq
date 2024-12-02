const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  const yOffset = window.scrollY;
  if (yOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
