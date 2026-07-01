/**
 * ABOUT ME SECTION ENGINE
 * Handles smooth, scroll-triggered counting animations for portfolio metrics.
 */

function initializeAboutCounter() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = Number(counter.dataset.target);
        let value = 0;
        
        // Setup incremental speed stepping math
        const speed = target / 80;

        const update = () => {
            value += speed;
            if (value < target) {
                counter.textContent = Math.floor(value);
                requestAnimationFrame(update);
            } else {
                // If it's the passion card, append a % sign; otherwise add a modern + suffix
                if (counter.parentElement.innerText.includes("Passion")) {
                    counter.textContent = target + "%";
                } else {
                    counter.textContent = target + "+";
                }
            }
        };

        update();
    });
}

// Modern Scroll Spy: Wait until the user actually reaches the section
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('#about');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Check if the about section is visible on screen
                if (entry.isIntersecting) {
                    initializeAboutCounter(); 
                    observer.unobserve(entry.target); // Kill the listener so it only runs once
                }
            });
        }, { 
            // Trigger when at least 25% of the About section is visible on screen
            threshold: 0.25 
        });

        observer.observe(aboutSection);
    } else {
        // Fallback safety layer: If no #about element is found, fire normally on window load
        window.addEventListener("load", initializeAboutCounter);
    }
});