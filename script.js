let d = document;
/* Menu */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  const $menu = d.querySelector(".menu");
  const $header = d.querySelector(".header");
  $btnMenu.addEventListener("click", (e) => {
    $menu.classList.toggle("is-active");
    $header.classList.toggle("bg-menu-opacity");
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
  });
  d.addEventListener("click", (e) => {
    if(!e.target.matches(".menu a"))return false;
    $menu.classList.remove("is-active");
    $header.classList.remove("bg-menu-opacity");
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
  });
 
})(document);
d.addEventListener("scroll", (e) => {
  if(window.scrollY > 250){
    d.querySelector(".header").classList.add("bg-menu-scroll");
    d.querySelector(".menu").classList.add("bg-menu-scroll");
    
  }else{
    d.querySelector(".header").classList.remove("bg-menu-scroll");
    d.querySelector(".menu").classList.remove("bg-menu-scroll");
  }
})
