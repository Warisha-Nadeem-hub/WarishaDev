// ========================================
// FEATURED PROJECTS
// ========================================

const projectCards = document.querySelectorAll(".reveal-card");

// ========================================
// Reveal on Scroll
// ========================================

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

projectCards.forEach(card => projectObserver.observe(card));

// ========================================
// Cursor Glow
// ========================================

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const darkMode = document.documentElement.getAttribute("data-theme") === "dark";
        const glow = darkMode
            ? "rgba(79,140,255,.22), rgba(18,24,38,.98) 45%"
            : "rgba(255,255,255,.95), rgba(255,255,255,.58) 45%";

        card.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%,
            ${glow}
        )`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.background = document.documentElement.getAttribute("data-theme") === "dark"
            ? "#121826"
            : "rgba(255,255,255,.58)";
    });

});