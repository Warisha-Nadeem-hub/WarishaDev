/*=========================================================
                JS/UNIVERSE.JS (Planet Hovers & Closing)
=========================================================*/
function initializeUniverse() {
    const universeSection = document.getElementById("universe");
    if (!universeSection) return;

    // 1. Core closing routine wrapper
    function closeUniverseModal() {
        universeSection.classList.remove('revealed');
        document.body.style.overflow = "visible"; // 👑 FIX: Instantly restore background trackpad scrolling
    }

    // 2. Explicit Close Button target click listener
    const closeBtn = document.getElementById('close-universe-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeUniverseModal();
        });
    }

    // 3. Click anywhere on glass screen space outside center container card block to close popup
    universeSection.addEventListener('click', (e) => {
        if (!e.target.closest('.container')) {
            closeUniverseModal();
        }
    });

    // 4. Premium planet hover effects script handler
    const planets = document.querySelectorAll(".planet");
    planets.forEach((planet) => {
        planet.addEventListener("mouseenter", () => {
            planet.style.boxShadow = "0 0 35px rgba(91,130,255,.6)";
        });
        planet.addEventListener("mouseleave", () => {
            planet.style.boxShadow = "none";
        });
    });
}
initializeUniverse();
