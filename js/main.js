const menu = document.querySelector(".navbar__links");
const menuBtn = document.querySelector(".navbar__icons");
const overlayEl = document.querySelector("#overlay");
menuBtn.addEventListener("click", toogleClass);

overlayEl.addEventListener("click", toogleClass);

function toogleClass() {
  menu.classList.toggle("navbar__open");
  menuBtn.classList.toggle("navbar__open");
  overlayEl.classList.toggle("nav__bar--open");
}
