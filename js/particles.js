/*=========================================================
                FLOATING PARTICLES
=========================================================*/

function initializeParticles() {

    const container = document.getElementById("particles");

    if (!container) return;

    const total = 25;

    for (let i = 0; i < total; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.width =
            (4 + Math.random() * 8) + "px";

        particle.style.height =
            particle.style.width;

        container.appendChild(particle);

    }

}