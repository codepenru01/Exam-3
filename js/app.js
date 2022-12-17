let bars = document.querySelector(".bars");
let navbar = document.querySelector(".navbar");

bars.addEventListener("click", function() {
    bars.classList.toggle("active");
    navbar.classList.toggle("active");
});