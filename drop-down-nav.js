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

// when click/toggle Features, subnav-content display: flex or none
const featuresDropdown = document.querySelector(".features");
const subnavContentFeat = document.querySelector(".subnav-content-feat");
featuresDropdown.addEventListener("click", function () {
  subnavContentFeat.classList.toggle("subnav-content-collapse");
});

// when click/toggle Company, subnav-content display: flex or none
const companyDropdown = document.querySelector(".company");
const subnavContentComp = document.querySelector(".subnav-content-company");
companyDropdown.addEventListener("click", function () {
  subnavContentComp.classList.toggle("subnav-content-collapse");
});

// DESKTOP
// select features > contents
const subnavContentFeatDesktop = document.querySelector(
  ".feature-contents-desktop"
);

// select features button
const featuresDropdownDesktop = document.querySelector(
  ".features-dropdown-desktop"
);

// click features button: opens menu
featuresDropdownDesktop.addEventListener("click", function () {
  console.log("hewwo");
  subnavContentFeatDesktop.classList.toggle("hide-contents-desktop");
});

//select company > contents
const subnavContentCompDesktop = document.querySelector(
  ".company-contents-desktop"
);

// select company button
const companyDropdownDesktop = document.querySelector(
  ".company-dropdown-desktop"
);

companyDropdownDesktop.addEventListener("click", function () {
  subnavContentCompDesktop.classList.toggle("hide-contents-desktop");
});
