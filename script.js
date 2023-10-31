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
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
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
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});