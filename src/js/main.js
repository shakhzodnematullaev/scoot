var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".wrapper");

burger.addEventListener("click", function() {
    burger.classList.toggle("hamburger--active");
    nav.classList.toggle("wrapper--active");
})