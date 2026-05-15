document.addEventListener("DOMContentLoaded", function () {
    const textToType = "WORLD FIRST AI POWERED SPACE MISSION PLANNER";
    const targetElement = document.getElementById("typewriter-text");
    let index = 0;
    const typingSpeed = 40; // Speed in milliseconds (lower is faster)

    function typeWriter() {
        if (index < textToType.length) {
            targetElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Optional: Uncomment below to stop the cursor from blinking after it finishes typing
            // document.querySelector('.typewriter-cursor').style.animation = 'none';
            // document.querySelector('.typewriter-cursor').style.opacity = '0';
        }
    }

    // Start a slight delay before typing begins
    setTimeout(typeWriter, 300);
});