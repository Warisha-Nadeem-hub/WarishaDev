/*=========================================================
                JS/NAVBAR.JS (Links & Openers Only)
=========================================================*/
function initializeNavbar() {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    if (!navbar) return;

    // Shrink navbar layout on trackpad scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
    });

    // Toggle mobile drawer
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }

    // Connect trigger items to pop up the Interactive Universe card
    const triggers = document.querySelectorAll('a[href="#universe"], a[href="#projects"], .hero-buttons a');
    const universeSection = document.getElementById('universe');

    if (universeSection) {
        triggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault();
                universeSection.classList.add('revealed');
                document.body.style.overflow = "hidden"; // Safely lock base background layer
                
                // Add pop-in scale action
                const container = universeSection.querySelector('.container');
                if (container) {
                    gsap.fromTo(container, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.2)" });
                }
            });
        });
    }
}
initializeNavbar();
