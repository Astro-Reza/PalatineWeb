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
});