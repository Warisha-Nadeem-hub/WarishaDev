/**
 * HERO COMPONENT ENGINE
 * Handles: 3D Starfield Canvas (Three.js) & Planet Card Interactive UI
 */

document.addEventListener("DOMContentLoaded", () => {
    initThreeUniverse();
    initPlanetCards();
});

/* =========================================================================
   1. THREE.JS COSMIC CANVAS ENGINE
   ========================================================================= */
function initThreeUniverse() {
    const container = document.getElementById('three-container');
    if (!container) return;

    // Check if Three.js library is loaded globally
    if (typeof THREE === 'undefined') {
        console.warn("Three.js library is missing! Add the CDN script tag to your HTML.");
        return;
    }

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Create a Particle Starfield ---
    const starsCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);

    // Color palette for coordinates (Flutter blues and cosmic purples)
    const colorChoices = [
        new THREE.Color('#4f8cff'), // Primary Blue
        new THREE.Color('#ad7cff'), // Cosmic Purple
        new THREE.Color('#ffffff')  // Pure Bright Star
    ];

    for (let i = 0; i < starsCount * 3; i += 3) {
        // Distribute positions in a spherical cosmic cloud arrangement
        const radius = 3 + Math.random() * 5;
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i+1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i+2] = radius * Math.cos(phi) - 2; // Bias slightly deeper behind logo

        // Assign randomized theme colors to particles
        const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
        colors[i] = randomColor.r;
        colors[i+1] = randomColor.g;
        colors[i+2] = randomColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Particle Texture/Material
    const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // --- Interactivity: Mouse Tracking Inertia ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
        // Calculate normalized window vector mapping (-0.5 to +0.5)
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    // --- Animation Loop ---
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Slow cinematic rotation of interstellar starfield clouds
        starField.rotation.y = elapsedTime * 0.03;
        starField.rotation.x = elapsedTime * 0.01;

        // Smooth physics-based interpolation (lerp) for cursor tracking parity
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Move the camera system dynamically based on mouse coordinates 
        camera.position.x = targetX * 1.5;
        camera.position.y = -targetY * 1.5;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }
    animate();

    // --- Responsive Dynamic Window Resize Safeguard ---
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

/* =========================================================================
   2. PLANET CARDS GLASS INTERACTIVITY (UI FEEDBACK)
   ========================================================================= */
function initPlanetCards() {
    const cards = document.querySelectorAll('.planet-card');
    
    cards.forEach(card => {
        // Magnetic Micro-Interaction effect when mouse hovers inside card bounds
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);

            // Subtle 3D card tilt angle shifting based on mouse positioning coordinates
            card.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
            card.style.zIndex = "10";
        });

        // Reset positions smoothly when pointer exits the surface area boundary
        card.addEventListener('mouseleave', () => {
            card.style.transform = `translate(0px, 0px) scale(1)`;
            card.style.zIndex = "6";
        });

        // Click interaction: Smoothly handles jumping or routing to your case projects
        card.addEventListener('click', () => {
            const projectID = card.classList[1]; // grabs 'cosmic', 'movewise', etc.
            console.log(`Navigating directly to portfolio project: ${projectID}`);
            // If you have matching HTML anchor sections down your page:
            // document.getElementById(projectID)?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const typingSpan = document.querySelector(".typing-text");
    const words = JSON.parse(typingSpan.getAttribute("data-words"));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75; // Faster deletion loop
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Standard typing speed
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Hold full sentence state for 2 seconds
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Delay before starting next word string
        }

        setTimeout(type, typeSpeed);
    }

    // Initialize typewriter 
    if(words.length) setTimeout(type, 1000);
});
