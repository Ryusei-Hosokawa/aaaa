"use strict";

// Navigation //
// Navigation clickAction 
// Processing on toggle button click
const navBtn = document.querySelector('.nav-btn');
const navWraper = document.querySelector('.nav-wraper');
const html = document.querySelector('html');
const body = document.querySelector('body');

// Menu button click
navBtn.addEventListener('click', () => {
  // Menu display
  navBtn.classList.toggle('active');
  navWraper.classList.toggle('open');
  // Fixed background
  html.classList.toggle('menu_open');
  body.classList.toggle('menu_open');
});
// Processing on link click
const navLists = document.querySelectorAll('.nav-list a');
navLists.forEach((navList) => {
  navList.addEventListener('click', () => {
    navBtn.classList.remove('active');
    navWraper.classList.remove('open');
    navFixed.classList.remove('menu_open');
  });
});


// Obtaining scroll volume
window.addEventListener('scroll' , () => {
console.log(window.pageYOffset);
  
})

// Smooth scroll action
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const getHref = link.getAttribute('href');
    const noneHash = document.getElementById(getHref.replace( '#', ''));
    const distanceLeft = noneHash.getBoundingClientRect().left;
    const positionY = window.pageYOffset;
    const target = distanceLeft - positionY;
    // window.scrollTo({
    //   top: target,
    //   behavior: "smooth",
    // });
    console.log(e);
  });
});




// Processing when hovering Portfolios
// const portfolioHover = function() {
//   const portfolioCards = docment.querySelectorAll('.portfolio-card');

//   for( let i = 0; i < portfolioCards.length; i++) {
    
//   }
// }
