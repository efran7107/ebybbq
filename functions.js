var navbar = document.getElementById("navbar");
document.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.classList.add("scroll");
        return;
    }
    else {
        navbar.classList.remove("scroll");
    }
});
