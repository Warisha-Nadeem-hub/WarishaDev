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
    "tracemate": [
        {
            title: "Splash Interface",
            desc: "A minimal loading portal introducing the core system parameters, configuring state structures, and confirming file accessibility bounds.",
            img: "../assets/images/tracemate.jpeg",
            bullets: [
                "Clean minimalist identity branding",
                "Optimized asynchronous service instantiation",
                "Fluid navigation handshakes",
                "Prepares environment context structures"
            ]
        },
        {
            title: "Dashboard Central",
            desc: "Core user dashboard presenting instant photo conversion pathways, user workspace entry points, and quick access utilities.",
            img: "../assets/images/tracemate_home.jpeg",
            bullets: [
                "Intuitive modular navigation grid layout",
                "Streamlined media asset upload pipeline",
                "Quick action triggers for drawing canvas tools",
                "Responsive layout optimized for multiple viewports"
            ]
        },
        {
            title: "Sketch Engine",
            desc: "Image processing node translating standard graphics into varying forms of line-art and stencil configurations.",
            img: "../assets/images/sketch_mode.jpeg",
            bullets: [
                "Real-time canvas render parameters",
                "Four unique artistic matrix filter configurations",
                "Instant cross-platform render pipelines",
                "Granular adjustment controls for fine details"
            ]
        },
        {
            title: "Tracing Control Panel",
            desc: "Interactive artist environment equipped with lock layers, transparency controls, and coordinate grid mappings.",
            img: "../assets/images/tracemode.jpeg",
            bullets: [
                "Complete screen-lock tracing mechanics",
                "Fluid opacity sliders for stencil alignment",
                "Proportional matrix grid overlays (3x3, 5x5, 10x10)",
                "Hardware viewport stability preservation"
            ]
        },
        {
            title: "History Logs",
            desc: "Persistent user library tracking previously completed transitions, original image references, and filter preferences.",
            img: "../assets/images/history.jpeg",
            bullets: [
                "Robust localized Hive/SQL storage stack",
                "Quick removal hooks and deletion orchestrators",
                "Project identification timestamp indexing",
                "Instant single-tap workspace restore states"
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
    ],
    "prepnest_ai": [
        {
            title: "Splash & Welcome Portal",
            desc: "A warm onboarding entry introducing the study assistant with custom asset handling configurations.",
            img: "../assets/images/prepnest_splash.jpeg", 
            bullets: [
                "Modern Material 3 UI identity configuration",
                "Warm branding welcoming framework",
                "Asynchronous asset status evaluations",
                "Clean viewport loading initialization sequence"
            ]
        },
    
        {
            title: "Dynamic AI Workspace",
            desc: "Core user hub offering 2–3 minute bite-sized daily flashcards optimized for high-retention technical study.",
            img: "../assets/images/prepnest_home.jpeg",
            bullets: [
                "Automated text token streaming integrations",
                "Interactive single-tap canvas expansion nodes",
                "Instant single-action verification mechanics",
                "Flexible layout support built on Riverpod state management"
            ]
        },
        {
            title: "Expanded Flashcard View",
            desc: "The deep-dive review screen displaying structured engineering summaries, interactive sample interview questions, and practical tips.",
            img: "../assets/images/prep.jpeg", 
            bullets: [
                "High-impact key points structured for microlearning retention",
                "Interactive 'Show Answer' components for active recall testing",
                "Contextual engineering tips to guide runtime architectural thought",
                "Clean typography configurations tailored for long-form readability"
            ]
        },
        {
            title: "Offline Vault System",
            desc: "Robust local notebook node running on lightweight Hive structures allowing single-tap note capture.",
            img: "../assets/images/notes.jpeg",
            bullets: [
                "Zero-latency Hive local data engine pipeline",
                "Interactive content mutation workflows",
                "Localized storage encryption models",
                "Cached fallback layer for system offline stability"
            ]
        },
        {
            title: "Intelligent Scheduler Node",
            desc: "Custom notification hub providing granular preference inputs to establish recurring study patterns.",
            img: "../assets/images/reminder.jpeg",
            bullets: [
                "Local hardware system background registration",
                "Granular recurring task time mappings",
                "Optimized state retention across reboots",
                "Frictionless utility parameters for target engagement"
            ]
        },
        {
            title: "Profile Screen & Progress Dashboard",
            desc: "Gamified progress dashboard mapping persistent usage performance and tracking streaks.",
            img: "../assets/images/profile.jpeg",
            bullets: [
                "Mathematical performance indicator matrices",
                "Persistent milestone counter pipelines",
                "Comprehensive learning profile detail maps",
                "Seamless system operational flag controls"
            ]
        },
        {
            title: "Light Profile & Progress Dashboard",
            desc: "The gamified analytical dashboard rendering persistent streaks and usage metrics in an elegant light interface.",
            img: "../assets/images/L_profile.jpeg", 
            bullets: [
                "High-contrast presentation of learning analytics and daily counters",
                "Clean white cards with crisp dark slate data points and typography",
                "Vibrant metric indicators and progress tracking visualizations",
                "Maintains clean structural parity with dark mode control nodes"
            ]
        },
        {
            title: "Material 3 Ambient Light Theme",
            desc: "A clean, high-contrast light presentation designed to optimize readability during daytime study intervals.",
            img: "../assets/images/L_home.jpeg", 
            bullets: [
                "Strict adherence to Material 3 light color specification models",
                "Subtle surface container elevation mapping for clear separation",
                "Deep indigo typography rendering to counter visual fatigue",
                "Dynamically tinted background cards using primary brand hues"
            ]
        },
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