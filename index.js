var listIcon = document.querySelector(".list");
var navLinks = document.querySelector(".ul-items");

listIcon.addEventListener("click", function () {
    navLinks.classList.toggle("d-flex");
});