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
