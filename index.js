function debounce(method, delay) {
    console.log("deboune")
    clearTimeout(method._tId);
    method._tId= setTimeout(function(){
        method();
    }, delay);
}
window.onscroll = function () {debounce(handleNavbar, 50);}

const navbar = document.querySelector("div.navbar");
const hamburger = document.querySelector("div.hamburger");
const navLinks = document.querySelector("ul.navbar-links-list");
const menuIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("cancel-white");
function handleNavbar(){
    console.log("onScroll")
    let top = window.scrollY;
    if(top >= 60) {
        navbar.classList.add("active-scroll")
    } else {
        navbar.classList.remove("active-scroll")
    }
}
hamburger.addEventListener("click", function() {
    if (navLinks.classList.contains("active-hamburger")) {
        closeMenu()
      } else {
        navbar.classList.add("active-scroll")
        navLinks.classList.add("active-hamburger");
        closeIcon.style.display = "inline";
        menuIcon.style.display = "none";
      }
})
function closeMenu() {
    navLinks.classList.remove("active-hamburger");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline";
}
navLinks.addEventListener("click", function() {
    closeMenu()
})
