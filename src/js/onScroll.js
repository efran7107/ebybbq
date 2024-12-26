
const aboutUsSection = document.getElementById('aboutUsSection')
const contactUsSection = document.getElementById("contactUsSection");
const ebybbqInAction = document.getElementById('ebybbqInAction');
const followUs = document.getElementById('followUs');
const sectionArr = [aboutUsSection, contactUsSection, ebybbqInAction, followUs]


const navbar = document.getElementById("nav");
window.onscroll = () => {
    const yOffset = window.scrollY;
  if (yOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sectionArr.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight - 10) {
      section.classList.add("animate");
      return
    }
  })
}