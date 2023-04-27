import { Games } from "./Games.js";
new Games();
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("position-sticky", window.scrollY > 0);
});