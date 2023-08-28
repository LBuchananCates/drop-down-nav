# Frontend Mentor - Intro section with dropdown navigation solution

Click here to view demo! https://leafy-bubblegum-b4b302.netlify.app/

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<img width="582" alt="Screen Shot 2023-08-10 at 12 47 26 PM" src="https://github.com/LBuchananCates/drop-down-nav/assets/100169368/fee04776-4337-4f40-beae-33d731a3d99d">

### Links

- Live Site URL: https://leafy-bubblegum-b4b302.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties based on whether they were "open" or "close"
- Flexbox
- Mobile-first workflow


### What I learned

- toggle features for dropdown menus on desktop and menu when interacting with navigation links

My Code Snippets

```html
- nav bars are still somewhat of a challenge because the menu items do not always look identical in mobile and desktop view
- making sure they work correctly when applying CSS classes is a challenge because organization and clear-to-understand names are crucial; in previous coding projects of mine, I had to delete all of my code and start from the beginning because my class names were not clear or followed a consistent pattern

 <!-- MOBILE NAV -->
      <nav class="nav-bar-mobile">
        <img src="./images/logo.svg" alt="snap-logo" class="snap-logo" />
        <img src="./images/icon-menu.svg" alt="menu-icon" class="menu-icon" />

        <div class="mobile-menu">
          <img
            src="./images/icon-close-menu.svg"
            alt="close-menu-icon"
            class="close-menu-icon"
          />
          <button class="mobile-menu-items features">Features</button>
          <div class="subnav-content-feat open-mobile-menu">
            <div class="mobile-menu-sub-items">
              <img src="./images/icon-todo.svg" alt="notebook" /> To Do List
            </div>
            <div class="mobile-menu-sub-items">
              <img src="./images/icon-calendar.svg" alt="calendar" /> Calendar
            </div>
            <div class="mobile-menu-sub-items">
              <img src="./images/icon-reminders.svg" alt="bell" /> Reminders
            </div>
            <div class="mobile-menu-sub-items">
              <img src="./images/icon-planning.svg" alt="timer" /> Planning
            </div>
          </div>
          <button class="mobile-menu-items company">Company</button>
          <div class="subnav-content-company">
            <div class="mobile-menu-sub-items">History</div>
            <div class="mobile-menu-sub-items">Our Team</div>
            <div class="mobile-menu-sub-items">Blog</div>
          </div>
          <button class="mobile-menu-items">Careers</button>
          <button class="mobile-menu-items">About</button>

          <div class="login-and-register-buttons">
            <button class="login">Login</button>
            <button class="register">Register</button>
          </div>
        </div>
      </nav>
```
```css
/* entire container of side menu */
.mobile-menu {
  display: flex;
  flex-direction: column;
  color: hsl(0, 0%, 41%);
  background-color: white;
  position: fixed;
  right: -327px;
  padding: 25px;
  transition: margin-right 0.5s;
}

/* closes menu nicely when click X close */
.close-menu {
  transition: 1s;
  margin-right: -27px;
}
```
```js
- This was one of my first projects where I had to create a mobile hamburger menu and a regular desktop menu (depending on screen sizes); this was a challenge because my html needed to contain class names for both mobile and desktop because the appearance would be different
- proud of the toggle feature for the 'features' and 'company' drop downs in mobile
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
```

### Continued development

- still working on improving how long it takes me to code the projects, depending on how structured my class names are; learned about the BEM CSS class naming 

### Useful resources

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ <-- this has been tremendously helpful for understanding flexbox in a visual way

## Author

- Website - https://leafy-bubblegum-b4b302.netlify.app/
- Frontend Mentor - [@LBuchananCates](https://www.frontendmentor.io/profile/lbuchanancates)
