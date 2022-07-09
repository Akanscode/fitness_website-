// carousel for instructor

// instructor variable
/*const imgs_swiper = document.getElementById("cardSlider");
const leftSlide = document.getElementById("left_slide");
const rightSlide = document.getElementById("right_slide");
const card = document.querySelectorAll("#cardSlider card");

var idx = 0;

function changeCard() {
  if (idx > card.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = card.length - 1;
  }
  imgs_swiper.style.transform = `translateX(${-idx * 600}px)`;
}
rightSlide.addEventListener("click", () => {
  idx++;
  changeCard();
});
leftSlide.addEventListener("click", () => {
  idx--;
  changeCard();
});*/

// checkbox function for selecting any instructor

function selected(id) {
  let selectbox = document.getElementById("checkbox" + id);
  selectbox.classList.toggle("bg-purple-600");
}

/*const slides = document.getElementById("cardSlider");
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
prevBtn.style.display = "none";*/

// check box function for selecting any class
