const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("hovered");
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove("hovered");
    });
});