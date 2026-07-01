/*=========================================================
    Portfolio by Visa
    Main Controller
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("%cPortfolio Loaded 🚀", "color:#4F8CFF; font-size:14px;");
    initializePortfolio();
});

/*=========================================================
                INITIALIZER
=========================================================*/
function initializePortfolio() {
    // initializeLoader(); // Commented or active depending on your architecture
    initializeNavbar();
    initializeScrollEffects();
    initializeRevealAnimation();
    initializeHeroEffects();
    initializeThemeEngine(); // 🌟 NEW: Instantiates Theme Memory Controllers
    initializeScrollTopEngine(); // 🌟 NEW: Handles Scroll-Up Element Controls
}

/*=========================================================
            SCROLL EFFECTS
=========================================================*/
function initializeScrollEffects() {
    window.addEventListener("scroll", () => {
        updateActiveNavigation();
    });
}

/*=========================================================
            ACTIVE NAVIGATION
=========================================================*/
function updateActiveNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href").replace("#", "");
        if (href === currentSection) {
            link.classList.add("active");
        }
    });
}

/*=========================================================
        🌟 NEW FEATURE: THEME ENGINE INITIALIZATION
=========================================================*/
function initializeThemeEngine() {
    const themeToggleBtn = document.querySelector(".theme-toggle-btn");
    if (!themeToggleBtn) return;

    // Read device memory cache state options or system preferences
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set initial configuration
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    // Handle clicks to swap themes smoothly
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = "light";

        if (currentTheme === "light") {
            newTheme = "dark";
        }

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    });
}

/*=========================================================
        🌟 NEW FEATURE: SCROLL TOP MECHANICS
=========================================================*/
function initializeScrollTopEngine() {
    const scrollTopBtn = document.querySelector(".scroll-top-btn");
    if (!scrollTopBtn) return;

    // Check display rules on scroll execution loops
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("is-visible");
        } else {
            scrollTopBtn.classList.remove("is-visible");
        }
    });

    // Tap processing events mapping configurations
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/*=========================================================
        HERO PARALLAX PLACEHOLDER
=========================================================*/
function initializeHeroEffects() {
    const hero = document.querySelector(".hero-right");
    if (!hero) return;

    hero.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;

        hero.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    });

    hero.addEventListener("mouseleave", () => {
        hero.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
}

/*=========================================================
        REVEAL PLACEHOLDER
=========================================================*/
function initializeRevealAnimation() {
    const elements = document.querySelectorAll(
        ".section-heading, .project-card, .about-grid, .contact-wrapper"
    );

    elements.forEach(item => {
        item.classList.add("fade-up");
    });
}

/* Dummy placeholder functions to protect standard initializers */
function initializeNavbar() { /* Reserved for navbar script adjustments if needed */ }