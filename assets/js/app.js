let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex ");
};

// search button for searching a class
function searchBtn() {
  const search = document.querySelector(".search");
  const btn = document.querySelector(".btn");
  const input = document.querySelector(".input");

  btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
  });
}
