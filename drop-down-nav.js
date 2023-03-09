// when click HAMB or X button, mobile-menu slides in and out
const closeMenuBtn = document.querySelector(".close-menu-icon");
const openMenuBtn = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

// opens menu WORKS
openMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("open-menu");
});

// closes menu WORKS
closeMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("close-menu");
  mobileMenu.classList.remove("open-menu");
});

// const subnavContent = document.querySelectorAll("subnav-content");
// let i;

// for (let i = 0; i < subnavContent.length; i++) {
//   subnavContent[i].addEventListener("click", function () {
//     this.classList.toggle("subnav-content-collapse");
//   });
// }

// when click/toggle Features, subnav-content display: flex or none
const featuresDropdown = document.querySelector(".features");
const subnavContentFeat = document.querySelector(".subnav-content-1");

featuresDropdown.addEventListener("click", function () {
  subnavContentFeat.classList.toggle("subnav-content-collapse");
});

// when click/toggle Company, subnav-content display: flex or none
const companyDropdown = document.querySelector(".company");
const subnavContentComp = document.querySelector(".subnav-content-2");
companyDropdown.addEventListener("click", function () {
  subnavContentComp.classList.toggle("subnav-content-collapse");
});
