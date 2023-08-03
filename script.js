//----Hamburger-----
const hamburger = document.querySelector(".hamburger");
const closedHamburger = document.querySelector(".closed-hamburger");
const navItems = document.querySelector(".nav-items");
const navItem = document.getElementsByClassName("nav-item");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("nav-open");
  hamburger.classList.toggle("fa-xmark");
});

for (let item of navItem) {
  item.addEventListener("click", () => {
    navItems.classList.toggle("nav-open");
    hamburger.classList.toggle("fa-xmark");
  });
}

// -- Initialize Swiper --
var swiper = new Swiper(".mySwiper", {
  centeredSlides: false,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  centeredSlides: false,
  slidesPerView: 5,
  spaceBetween: 10,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 20,
  centeredSlides: false,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
