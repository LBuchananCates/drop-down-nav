// when click img.menu-icon, transition applied to div.mobile-menu

// when click HAMB or X button, mobile-menu slides in and out
const closeMenuBtn = document.querySelector(".close-menu-icon");
const openMenuBtn = document.querySelector(".menu-icon");

const mobileMenu = document.querySelector(".mobile-menu");

// opens menu WORKS
openMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("open-menu");
});

// closes menu
closeMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("close-menu");
  mobileMenu.classList.remove("open-menu");
});
