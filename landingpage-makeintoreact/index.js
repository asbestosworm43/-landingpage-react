const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
  console.log("working");
  navMenu.classList.toggle("show");
  if (navMenu.classList.toggle === "show") {
    display: block;
  } else navMenu.classList.toggle === "hide";
  {
    display: none;
  }
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
