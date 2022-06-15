document.addEventListener("DOMContentLoaded", () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
    const pattern = el.getAttribute("placeholder"),
      slots = new Set(el.dataset.slots || "_"),
      prev = ((j) =>
        Array.from(pattern, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0),
      first = [...pattern].findIndex((c) => slots.has(c)),
      accept = new RegExp(el.dataset.accept || "\\d", "g"),
      clean = (input) => {
        input = input.match(accept) || [];
        return Array.from(pattern, (c) =>
          input[0] === c || slots.has(c) ? input.shift() || c : c
        );
      };
    format = () => {
      const [i, j] = [el.selectiionStart, el.selectionEnd].map((i) => {
        i = clean(el.value.slice(0, i)).findIndex((c) => slots.has(c));
        return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
      });
      el.value = clean(el.value).join``;
      el.setSeletionRange(i, j);
      back = false;
    };
    el.addEventListener("keydown", (e) => (back = e.key === "Backspace"));
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
  }
});

var pay = document.querySelector(".pay");
var allinputs = document.querySelectorAll(".input_text input");
pay.addEventListener("click", function () {
  allinputs.forEach((e) => {
    e.classList.remove("border-red-800");
    if (e.value.length < 1) {
      e.classList.add("border-red-800");
    }
  });
});
