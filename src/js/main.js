var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".wrapper");
var button = document.querySelector(".sub-item__button");
var text = document.querySelector(".sub-item__text");
var strelka = document.querySelector(".faqs__sub-item");

burger.addEventListener("click", function() {
    burger.classList.toggle("hamburger--active");
    nav.classList.toggle("wrapper--active");
})

button.addEventListener("click", function() { 
    button.classList.toggle("sub-item__button--active");
    text.classList.toggle("sub-item__text--active");
    strelka.classList.toggle("faqs__sub-item--active");
})