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

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && universeSection.classList.contains("revealed")) {
            closeUniverseModal();
        }
    });

    // Let each orbit be clicked through and pause it while its planet is targeted.
    const planets = document.querySelectorAll(".planet");
    planets.forEach(planet => {
        const orbit = planet.closest(".orbit");
        if (!orbit) return;

        planet.addEventListener("pointerenter", () => orbit.classList.add("is-paused"));
        planet.addEventListener("pointerleave", () => orbit.classList.remove("is-paused"));
        planet.addEventListener("focus", () => orbit.classList.add("is-paused"));
        planet.addEventListener("blur", () => orbit.classList.remove("is-paused"));
    });
}
initializeUniverse();
