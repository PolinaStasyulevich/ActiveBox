document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".header__menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
