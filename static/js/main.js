document.addEventListener("DOMContentLoaded", function () {
    const textToType = "WORLD FIRST AI POWERED SPACE COMMERCIALIZATION PLANNER";
    const targetElement = document.getElementById("typewriter-text");
    let index = 0;
    const typingSpeed = 40; // Speed in milliseconds (lower is faster)

    if (targetElement) {
        function typeWriter() {
            if (index < textToType.length) {
                targetElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        setTimeout(typeWriter, 300);
    }

    // --- Burger Menu Toggle ---
    const burgerBtn = document.getElementById("burger-btn");
    const mobileNav = document.getElementById("mobile-nav");

    if (burgerBtn && mobileNav) {
        function openMenu() {
            burgerBtn.classList.add("is-open");
            mobileNav.classList.add("is-open");
            burgerBtn.setAttribute("aria-expanded", "true");
            mobileNav.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            burgerBtn.classList.remove("is-open");
            mobileNav.classList.remove("is-open");
            burgerBtn.setAttribute("aria-expanded", "false");
            mobileNav.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        burgerBtn.addEventListener("click", function () {
            const isOpen = burgerBtn.classList.contains("is-open");
            isOpen ? closeMenu() : openMenu();
        });

        // Close when a nav link is clicked
        mobileNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        // Close on Escape key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeMenu();
        });
    }
});