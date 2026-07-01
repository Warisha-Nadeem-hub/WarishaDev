// ========================================
// FEATURED PROJECTS
// ========================================

const projectCards = document.querySelectorAll(".reveal-card");

// ========================================
// Reveal on Scroll
// ========================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

projectCards.forEach(card => observer.observe(card));
 
const phone = document.querySelector(".hero-phone img");

window.addEventListener("mousemove", e=>{

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*12;

phone.style.transform=
`translate(${x}px,${y}px)`;

});

// ========================================
// 3D Tilt
// ========================================

projectCards.forEach(card => {

    const inner = card.querySelector(".project-card-inner");

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 18;
        const rotateX = -(y - centerY) / 18;

        inner.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });

    card.addEventListener("mouseleave", () => {

        inner.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
        `;

    });

});


// ========================================
// Cursor Glow
// ========================================

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%,
            rgba(255,255,255,.95),
            rgba(255,255,255,.58) 45%
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.58)";

    });

});