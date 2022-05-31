const sideNav = document.querySelector(".side-nav");
const closeNav = document.querySelector(".svg-close");
const openNav = document.querySelector(".svg-open");
const mainCont = document.querySelector(".main-container");

openNav.addEventListener("click", function () {
  // sideNav.classList.remove("hidden");
  sideNav.style.width = "25rem";
  mainCont.style.marginLeft = "25rem";
});

closeNav.addEventListener('click', function() {
  // sideNav.classList.add("hidden");
  sideNav.style.width = "0";
  mainCont.style.marginLeft = "0";
})


