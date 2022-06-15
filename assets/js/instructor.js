// carousel for instructor

// instructor variable
/*const imgs_swiper = document.getElementById("cardSlider");
const leftSlide = document.getElementById("left_slide");
const rightSlide = document.getElementById("right_slide");
const card = document.querySelectorAll("#cardSlider card");

let ide = 0;

function changeCard() {
  if (ide > card.length - 1) {
    ide = 0;
  } else if (ide < 0) {
    ide = card.length - 1;
  }
  imgs_swiper.style.transform = `translateX(${-ide * 500}px)`;
}
rightSlide.addEventListener("click", () => {
  ide++;
  changeCard();
});
leftSlide.addEventListener("click", () => {
  ide--;
  changeCard();
});

// checkbox function for selecting any instructor

function checked_box(checkbox) {
  let check_box = document.querySelector("check" + checkbox);
  check_box.classList.toggle("bg-purple-800");
}*/

const slides = document.getElementById("cardSlider");
const prevBtn = document.getElementById("left_slide");
const nextBtn = document.getElementById("right_slide");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
