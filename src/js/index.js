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
  img27,
];

const navbar = document.getElementById("nav");
const contactUsSection = document.getElementById("contactUsSection");
const imgCont = document.getElementById("imgCont");
const mainImgDir = [
  document.getElementById("mainLeft"),
  document.getElementById("mainRight"),
];
const photoReelCont = document.getElementById("photoReelCont");
const startingImgs = imgs.slice(0, 5);
const startingImg = startingImgs[0];
const lastImgs =
  imgs.length % 5 > 0 ? imgs.slice(-(imgs.length % 5)) : imgs.slice(-5);
const lastImg = imgs[imgs.length - 1];

imgCont.setAttribute("src", startingImg);
startingImgs.forEach((img) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", img);
  newImg.classList.add("photo");
  if (img === startingImg) {
    newImg.classList.add("active");
  }
  photoReelCont.appendChild(newImg);
});

const photos = document.querySelectorAll(".photo");

const resetPhotos = (end) => {
  switch (end) {
    case "start":
      imgCont.setAttribute("src", startingImg);
      startingImgs.forEach((img) => {
        const photoCont = photos[startingImgs.indexOf(img)];
        photoCont.setAttribute("src", img);
        photoCont.classList.remove("active");
      });
      photos[0].classList.add("active");
      break;
    case "end":
      imgCont.setAttribute("src", lastImg);
      if (lastImgs.length < 5) {
        photos.forEach((img) => img.setAttribute("src", ""));
        lastImgs.forEach((img) => {
          photos[lastImgs.indexOf(img)].setAttribute("src", img);
        });
        break;
      }
      lastImgs.forEach((img) => {
        photos[lastImgs.indexOf(img)].setAttribute("src", img);
      });
      break;
  }
};

const shiftPhotos = (dirEl) => {
  const direction = dirEl.target.getAttribute("id").slice(4).toLowerCase();
  const imgIndexArr = [];
  photos.forEach((photo) =>
    photo.getAttribute("src") !== ""
      ? imgIndexArr.push(imgs.indexOf(photo.getAttribute("src")))
      : imgIndexArr.push(-1)
  );
  if (direction === "right") {
    if (imgIndexArr.filter((index) => index === -1).length < 1) {
      const newIndexArr = imgIndexArr.map((i) => i + 5);
      newIndexArr.forEach((i) =>
        i < imgs.length
          ? photos[newIndexArr.indexOf(i)].setAttribute("src", imgs[i])
          : photos[newIndexArr.indexOf(i)].setAttribute("src", "")
      );
      return;
    }
    resetPhotos("start");
    return;
  }

  if (imgIndexArr.filter((index) => index === -1).length > 0) {
    const lastIndexSt = imgs.length - 1 - (imgs.length % 5) - 4;
    const nxtSet = [lastIndexSt];
    for (let i = 1; i < 5; i++) {
      nxtSet.push(i + lastIndexSt);
    }
    nxtSet.forEach((index) => {
      photos[nxtSet.indexOf(index)].setAttribute("src", imgs[index]);
    });
    return;
  }

  const newIndex = imgs.indexOf(imgCont.getAttribute('src'))
  const newArr = [newIndex]
  for(let i = newIndex - 1; i > newIndex - 5; i--){
    newArr.push(i)
  }
  const newSlides = newArr.reverse().map(i => imgs[i])
  newSlides.forEach(img => {
    photos[newSlides.indexOf(img)].setAttribute('src', img)
  })
  

};

const changePhoto = (dirEl) => {
  const direction = dirEl.target.getAttribute("id").slice(4).toLowerCase();
  const imgIndex = imgs.indexOf(imgCont.getAttribute("src"));
  switch (direction) {
    case "right":
      if (imgIndex === imgs.length - 1) {
        resetPhotos("start");
        break;
      }
      imgCont.setAttribute("src", imgs[imgIndex + 1]);
      photos[imgIndex % 5].classList.remove("active");
      if (imgIndex % 5 < photos.length - 1) {
        photos[(imgIndex + 1) % 5].classList.add("active");
        break;
      }
      shiftPhotos(dirEl);
      photos[0].classList.add("active");
      break;
    case "left":
      if (imgIndex === 0) {
        resetPhotos("end");
        break;
      }
      imgCont.setAttribute("src", imgs[imgIndex - 1]);
      photos[imgIndex % 5].classList.remove("active");
      if (imgIndex % 5 > 0) {
        photos[(imgIndex - 1) % 5].classList.add("active");
        break;
      }
      shiftPhotos(dirEl);
      photos[photos.length - 1].classList.add("active");
      break;
  }
};

const clickEvent = (dirEl) => {
  dirEl.addEventListener("click", changePhoto);
};

mainImgDir.forEach(clickEvent);

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

  if (contactUsSection.getBoundingClientRect().top < window.innerHeight - 10) {
    contactUsSection.classList.add("animate");
  }
};
