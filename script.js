const hamburger = document.querySelector(".hamburger");
const closedHamburger = document.querySelector(".closed-hamburger");
const navItems = document.querySelector(".nav-items");
const navItem = document.getElementsByClassName("nav-item");

hamburger.addEventListener("click", () => {
  navItems.style.display = "block";
  hamburger.style.display = "none";
  closedHamburger.style.display = "block";
});

closedHamburger.addEventListener("click", () => {
  navItems.style.display = "none";
  closedHamburger.style.display = "none";
  hamburger.style.display = "block";
});

for (let item of navItem) {
  item.addEventListener("click", () => {
    navItems.style.display = "none";
    hamburger.style.display = "block";
    closedHamburger.style.display = "none";
  });
}
