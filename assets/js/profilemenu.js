// user profile sumenu
function toggleMenu(btn) {
  const el = btn.parentElement.querySelector(".subMenu");
  el.classList.toggle("hidden");
}
const btn = document.querySelector(".hasSubMenu");
btn.addEventListener("click", function () {
  toggleMenu(btn);
});

// check box function for selecting any class

function checked(id) {
  let checked_purple = document.getElementById("check" + id);
  checked_purple.classList.toggle("bg-purple-600");
}

//carousel for class card selecting
const imgs = document.getElementById("img_swiper");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#img_swiper img");

let idx = 0;

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
});

// carousel for instructor
