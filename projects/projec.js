/*=========================================================
                GLOBAL SHARED PROJECT SLIDER ENGINE
                File: js/project-loader.js
=========================================================*/

// 1. Unified Multidimensional Repository Data Matrix for All 4 Projects
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
    doughstory: [
        {
            title: "Welcome Screen",
            desc: "Immersive landing flow designed with macro imagery to pull users into the gourmet bakery interface immediately.",
            img: "../assets/images/doughstory_welcome.png",
            bullets: ["High-definition background integration", "Fluid loading sequence presentation", "Clean exploration shortcuts triggers", "Premium typography tracking metrics"]
        },
        {
            title: "Menu Catalog",
            desc: "Stunning catalog display highlighting real-time pricing indicators and micro-interactions components.",
            img: "../assets/images/doughstory_menu.png",
            bullets: ["Dynamic product row filters sorting", "Parallax image scrolling feedback loops", "Interactive nutritional layout indexes", "Smooth tap-to-expand details modal cards"]
        },
        {
            title: "Item Selection",
            desc: "Highly tailored customizable item summary board designed for customized menu processing streams.",
            img: "../assets/images/doughstory_details.png",
            bullets: ["Real-time volume scaling modifiers buttons", "Dynamic secondary ingredient check selectors", "Interactive allergy warning indicators alerts", "Live order cost-subtotal counter logs"]
        },
        {
            title: "Shopping Cart",
            desc: "Premium check-out tray container designed to simplify e-commerce processing pathways layers.",
            img: "../assets/images/doughstory_cart.png",
            bullets: ["Slide-to-delete item gesture controls mapping", "Promo coupon voucher code testing fields", "Transparent taxes delivery calculation matrices", "Instant click-to-pay authorization wrappers"]
        },
        {
            title: "Order Tracking",
            desc: "Live processing milestone pipeline monitoring screen displaying delivery routes tracking indicators.",
            img: "../assets/images/doughstory_tracking.png",
            bullets: ["Interactive progress tracker step bar timeline", "Live delivery courier driver text message shortcut", "Estimated arrival time countdown timers", "Haptic tap feedback completion statuses updates"]
        }
    ],
    deathnote: [
        {
            title: "Anime Onboarding",
            desc: "Dark stylized intro layout capturing look and feel of the legendary series seamlessly.",
            img: "../assets/images/deathnote_intro.png",
            bullets: ["Custom gothic style typography elements", "Glowing red atmospheric vignette shadows", "Smooth scroll entry fade transitions", "Sleek immersive audio backing configuration"]
        }
        // Core items configurations stack for remaining screens goes here...
    ],
    cosmicspace: [
        {
            title: "Futuristic Portal",
            desc: "UI/UX space tracking hub concept displaying celestial alignment coordinate grids nodes overlays.",
            img: "../assets/images/cosmic_portal.png",
            bullets: ["Sci-fi neon overlay mesh vector graphics", "3D planet position tracking matrices metrics", "Animated interactive telescope zoom widgets", "Advanced particle systems backdrop integrations"]
        }
        // Core items configurations stack for remaining screens goes here...
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
