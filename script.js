let d = document;
const $btnMenu = d.querySelector(".menu-btn");
const $menu = d.querySelector(".menu");
const $header = d.querySelector(".header");
$btnMenu.addEventListener("click", (e) => {
  $menu.classList.toggle("none");
  $header.classList.toggle("bg-menu");
});
