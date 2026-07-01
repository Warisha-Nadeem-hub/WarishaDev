/*=========================================================
                GLOBAL SHARED PROJECT SLIDER ENGINE
                File: js/project-loader.js
=========================================================*/

// 1. Unified Multidimensional Repository Data Matrix for All Projects
const masterPortfolioDatabase = {
    movewise: [
        {
            title: "Splash Screen",
            desc: "A modern and minimal splash screen that represents the brand identity and provides a great first impression.",
            img: "../assets/images/splash.jpg",
            bullets: ["Clean and modern design", "Smooth loading experience", "Brand-focused visual identity", "Prepares users for their fitness journey"]
        },
        {
            title: "Login Screen",
            desc: "Secure user authentication entry gate matching modern fluid security authorization profiles.",
            img: "../assets/images/login.jpg",
            bullets: ["Email & Social integration authentication", "Secure credential data input handling", "Fluid text field animations feedback", "Clean password visibility toggle option"]
        },
        {
            title: "Goal Selection",
            desc: "Interactive onboarding workflow questionnaire built to dynamically capture client performance objectives.",
            img: "../assets/images/goals.jpg",
            bullets: ["Custom training criteria cards selection", "Animated progress percentage tracker bar", "Flexible difficulty preferences mapping", "Tailored calorie-count metric calculators"]
        },
        {
            title: "Home Screen",
            desc: "Central interactive user dashboard displaying fitness tracking loops arrays metrics panels elements.",
            img: "../assets/images/home.jpg",
            bullets: ["Real-time training tracking charts loops", "Hydration water capsule counter log widgets", "Daily achievements streak progression lists", "Instant AI workout launching shortcuts buttons"]
        },
        {
            title: "Posture Analysis",
            desc: "Advanced real-time computer vision training interface driven by automated framework checking guides.",
            img: "../assets/images/analysis.jpg",
            bullets: ["Live mobile camera vector coordinate overlay", "Dynamic angle computation tracking logs lines", "Immediate audio-visual error alert feedback", "Precision rep calibration analytics counters"]
        }
    ],
    // Updated key to match your web project data attribute, using web asset extensions
    "doughstory-web": [
        {
            title: "First Layout (Splash)",
            desc: "A widescreen visual experience using parallax hero properties to express bakery craftsmanship and capture food delivery leads.",
            img: "../assets/images/landing.png",
            url: "www.doughstory.com/welcome",
            bullets: ["Full-bleed vector photography integration", "Fluid CSS typographic scale for high resolution displays", "Prominent 'Menu' primary tracking button", "Optimized layout weights for instant page load speed"]
        },
        {
            title: "Pick Donut Page",
            desc: "Highly Pick Donut Selection Screen.",
            img: "../assets/images/selection.png",
            url: "www.doughstory.com/menu",
            bullets: [ "Filters for Different type of Donuts","Responsive grid layout for high resolution displays", "Instant add-to-cart item selection feedback"]
        },
        {
            title: "Cart Review Panel",
            desc: "Premium cart diplay.",
            img: "../assets/images/cart.png",
            url: "www.doughstory.com/cart",
            bullets: ["Slide-to-delete item controls mapping", "Live order cost-subtotal counter logs", "Instant click-to-pay authorization "]
        },
        {
            title: "Checkout Layout",
            desc: "Live processing payment module .",
            img: "../assets/images/payment.png",
            url: "www.doughstory.com/checkout",
            bullets: [ "Secure Stripe payment gateway integration", "Real-time order confirmation feedback"]
        }
    ],
"deathnote": [
        {
            title: "System Initialization",
            desc: "Gateway entrance using gothic typography overlays. Immersive atmospheric landing layer engineered to anchor the dark psychological tension immediately.",
            img: "../assets/images/DN_landing.png", 
            bullets: [
                "Custom serif gothic typography layout elements",
                "Glowing red atmospheric vignette shadow borders",
                "Smooth scroll entry fade sequence handlers",
                "Sleek immersive audio backing configuration"
            ]
        },
        {
            title: "Intelligence Network",
            desc: "A cosmic starfield matrix where major character profiles (Kira, L, Misa, Ryuk) hover as hidden celestial nodes, opening detailed glassmorphic intelligence dossiers upon interface interaction.",
            img: "../assets/images/network.png",
            bullets: [
                "Interactive hover celestial nodes map arrays",
                "Glassmorphic intelligence container layout overlays",
                "Character dossiers tracking profiles modules",
                "Dynamic backdrop canvas glow particle animations"
            ]
        },
        {
            title: "The 3D Sanctuary",
            desc: "Seamless transition into a localized room mesh where a procedurally constructed 3D notebook rests in a real-time lighting container.",
            img: "../assets/images/name.png",
            bullets: [
                "Real-time dynamic light mapping projections matrix",
                "Procedural 3D model orientation viewport constraints",
                "High-fidelity vector shadow casting pipelines",
                "Interactive page-turning gesture triggers"
            ]
        },
        {
            title: "Execution Sequence",
            desc: "A terminal execution prompt linked to a biometric heart-rate monitor countdown, culminating in an intentional hardware-glitch breakdown effect upon completion.",
            img: "../assets/images/eliminated.png",
            bullets: [
                "Biometric simulation countdown track intervals",
                "Custom hardware text glitch animation frames",
                "Heart failure verification sequence flags",
                "Automated global layout hardware reset fallback loops"
            ]
        }
    ],
    cosmicspace: [
        {
            title: "Futuristic Portal",
            desc: "UI/UX space tracking hub concept displaying celestial alignment coordinate grids nodes overlays.",
            img: "../assets/images/cosmic_portal.png",
            bullets: ["Sci-fi neon overlay mesh vector graphics", "3D planet position tracking matrices metrics", "Animated interactive telescope zoom widgets", "Advanced particle systems backdrop integrations"]
        }
    ]
};

// 2. Core Execution Orchestrator
document.addEventListener("DOMContentLoaded", () => {
    // Read the unique project identifier keyword directly off the HTML body tag!
    const activeProjectKey = document.body.getAttribute("data-project");
    const activeSliderData = masterPortfolioDatabase[activeProjectKey];

    // Safe exit clause if page doesn't contain a valid slider data block array
    if (!activeSliderData || activeSliderData.length === 0) return;

    let pointerIndex = 0;

    function renderSlideFrame(index) {
        pointerIndex = index;
        const currentData = activeSliderData[index];

        // Trigger GSAP fade flash animation validation check
        if (typeof gsap !== 'undefined') {
            gsap.fromTo("#main-slider-img", { opacity: 0.5 }, { opacity: 1, duration: 0.35 });
        }

        // Swap core text blocks and screenshot link sources paths
        document.getElementById("main-slider-img").src = currentData.img;
        document.getElementById("main-screen-title").innerText = currentData.title;
        document.getElementById("main-screen-desc").innerText = currentData.desc;

        // WEB RELATED FIX: Dynamically changes simulated browser URL if the element exists
        const browserUrlBar = document.getElementById("main-browser-url");
        if (browserUrlBar && currentData.url) {
            browserUrlBar.innerText = currentData.url;
        }

        // Clear and dynamically map checkboxes arrays indicators
        const bulletsContainer = document.getElementById("main-screen-bullets");
        if (bulletsContainer) {
            bulletsContainer.innerHTML = "";
            currentData.bullets.forEach(bulletText => {
                const bulletDiv = document.createElement("div");
                bulletDiv.className = "bullet-point";
                bulletDiv.innerText = bulletText;
                bulletsContainer.appendChild(bulletDiv);
            });
        }

        // Synchronize active highlights across left index navigation links items
        document.querySelectorAll(".nav-item-row").forEach((el, i) => {
            if (i === index) el.classList.add("active");
            else el.classList.remove("active");
        });

        // Synchronize active highlights across right rail thumbnail track images
        document.querySelectorAll(".track-preview-thumb").forEach((el, i) => {
            if (i === index) el.classList.add("active");
            else el.classList.remove("active");
        });
    }

    // Bind Interaction click loops to dot lines timelines items elements
    document.querySelectorAll(".nav-item-row").forEach(el => {
        el.addEventListener("click", () => renderSlideFrame(parseInt(el.dataset.index)));
    });
    document.querySelectorAll(".track-preview-thumb").forEach(el => {
        el.addEventListener("click", () => renderSlideFrame(parseInt(el.dataset.index)));
    });

    // Arrow trigger button handlers hooks listeners
    const rightArrow = document.getElementById("slide-right-btn");
    const leftArrow = document.getElementById("slide-left-btn");

    if (rightArrow) {
        rightArrow.addEventListener("click", () => {
            let nextIndex = (pointerIndex + 1) % activeSliderData.length;
            renderSlideFrame(nextIndex);
        });
    }

    if (leftArrow) {
        leftArrow.addEventListener("click", () => {
            let prevIndex = (pointerIndex - 1 + activeSliderData.length) % activeSliderData.length;
            renderSlideFrame(prevIndex);
        });
    }
});