const manuBtn = document.querySelector("#manu-btn");
const toggleUl = document.querySelector(".toggle-menu");
const overlay = document.querySelector("#overlay");
manuBtn.addEventListener("click", function () {
  manuBtn.classList.toggle("open");
  toggleUl.classList.toggle("menu-show");
  overlay.classList.toggle("show");
  document.body.classList.toggle("stop-scrolling");
});
