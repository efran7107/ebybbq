const navbar = document.querySelector(".navbar");
const contactUsSection = document.getElementById("contactUsSection");

window.onscroll = () => {
  const yOffset = window.scrollY;
  if (yOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if(contactUsSection.getBoundingClientRect().top < window.innerHeight -10 ){
    contactUsSection.classList.add("animate");
  }
  
};



