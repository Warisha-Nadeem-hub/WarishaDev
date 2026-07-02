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

    // Toggle mobile drawer wrapper
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }

    // Handle Closing the Menu on Link Tap + Universe Logic Separator
    const universeSection = document.getElementById('universe');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            // 1. Close mobile drawer menus automatically upon tap interaction
            if (hamburger) hamburger.classList.remove("active");
            if (navLinks) navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

            // 2. UNIVERSE MODAL LOGIC: Intercept only if it specifically points to #universe
            if (href === "#universe" && universeSection) {
                e.preventDefault(); // Only lock down normal behavior for the modal card trigger
                universeSection.classList.add('revealed');
                document.body.style.overflow = "hidden"; // Lock background scroll for modal view

                const container = universeSection.querySelector('.container');
                if (container && typeof gsap !== "undefined") {
                    gsap.fromTo(container, 
                        { scale: 0.9, opacity: 0 }, 
                        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.2)" }
                    );
                }
            }
            // 3. REGULAR LINKS: Do NOT call preventDefault(). Let browser jump smoothly to #about, #projects, etc.
        });
    });

    // Optional: Keep separate support loop if you have extra trigger action items inside Hero sections
    const extraHeroTriggers = document.querySelectorAll('.hero-buttons a[href="#universe"]');
    if (universeSection) {
        extraHeroTriggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault();
                universeSection.classList.add('revealed');
                document.body.style.overflow = "hidden";
                const container = universeSection.querySelector('.container');
                if (container && typeof gsap !== "undefined") {
                    gsap.fromTo(container, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.2)" });
                }
            });
        });
    }
}
initializeNavbar();