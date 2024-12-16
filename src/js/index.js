const img1 = "./src/assets/img/img1.jpg";
const img2 = "./src/assets/img/img2.jpg";
const img3 = "./src/assets/img/img3.jpg";
const img4 = "./src/assets/img/img4.jpg";
const img5 = "./src/assets/img/img5.jpg";
const img6 = "./src/assets/img/img6.jpg";
const img7 = "./src/assets/img/img7.jpg";
const img8 = "./src/assets/img/img8.jpg";
const img9 = "./src/assets/img/img9.jpg";
const img10 = "./src/assets/img/img10.jpg";
const img11 = "./src/assets/img/img11.jpg";
const img12 = "./src/assets/img/img12.jpg";
const img13 = "./src/assets/img/img13.jpg";
const img14 = "./src/assets/img/img14.jpg";
const img15 = "./src/assets/img/img15.jpg";
const img16 = "./src/assets/img/img16.jpg";
const img17 = "./src/assets/img/img17.jpg";
const img18 = "./src/assets/img/img18.jpg";
const img19 = "./src/assets/img/img19.jpg";
const img20 = "./src/assets/img/img20.jpg";
const img21 = "./src/assets/img/img21.jpg";
const img22 = "./src/assets/img/img22.jpg";
const img23 = "./src/assets/img/img23.jpg";
const img24 = "./src/assets/img/img24.jpg";
const img25 = "./src/assets/img/img25.jpg";
const img26 = "./src/assets/img/img26.jpg";
const img27 = "./src/assets/img/img27.jpg";

const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27
];


const navbar = document.querySelector(".navbar");
const contactUsSection = document.getElementById("contactUsSection");
const imgCont = document.getElementById("imgCont");
const photoReelCont = document.getElementById("photoReelCont");
const lefts = document.querySelectorAll('#left');
const rights = document.querySelectorAll('#right');
const startingImgs = imgs.slice(0, 5)
const startingImg = startingImgs[0];

imgCont.setAttribute("src", startingImg);
startingImgs.forEach((img) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", img);
  newImg.classList.add("photo");
  if(img === startingImg){
    newImg.classList.add("active");
  }
  photoReelCont.appendChild(newImg);
})

const photos = document.querySelectorAll(".photo");

rights.forEach(right => {
    right.addEventListener("click", (e) => {
        const curImgIndex = imgs.indexOf(startingImg);
        if(curImgIndex < photos.length - 1){
            imgCont.setAttribute('src', imgs[curImgIndex + 1]);
            photos[curImgIndex].classList.remove("active");
            photos[curImgIndex + 1].classList.add("active");
        }
    })
})


photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    photos.forEach((photo) => {
      photo.classList.remove("active");
    });
    photo.classList.add("active");
    imgCont.setAttribute("src", photo.getAttribute("src"));
  });
});

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


