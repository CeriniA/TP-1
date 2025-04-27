let d = document;
/* Menu */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  const $menu = d.querySelector(".menu");
  const $header = d.querySelector(".header");
  $btnMenu.addEventListener("click", (e) => {
    $menu.classList.toggle("is-active");
    $header.classList.toggle("bg-menu");
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
  });
  d.addEventListener("click", (e) => {
    if(!e.target.matches(".menu a"))return false;
    $menu.classList.add("none");
    $header.classList.remove("bg-menu");
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
  });
})(document);
