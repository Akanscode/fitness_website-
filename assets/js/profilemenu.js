//tab

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tabbtn");
const tabContents = document.querySelectorAll("#tabContents");

// each tab button will have a  click event  listener
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    // hiding all tabs
    tabs.forEach((tabContents) => {
      tabContents.classList.add("hidden");
    });

    // showing only the tab that this tab button should show
    const tabContents = tabBtn.getAttribute("data-tabopen");

    tabs.forEach((tabContents) => {
      tabContents.classList.remove("hidden");
    });

    //document.getElementById(tabContents).classList.remove("hidden");
    // document.getElementById(tab).classList.add("flex");

    //  we will give same styles to all tab
    tabBtns.forEach((tabBtn) => {
      tabBtn.className = "tabbtn     cursor-pointer";
    });

    //  we will give special styles to the active tab
    tabBtn.className = "tabbtn font-medium    text-purple-700 cursor-pointer";
  });
});

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
