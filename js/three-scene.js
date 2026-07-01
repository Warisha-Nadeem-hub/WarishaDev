/*=========================================================
                THREE.JS COSMIC DUST CANVAS
=========================================================*/

function initializeThreeScene() {
    const container = document.getElementById('three-container');
    if (!container) return;

    // 1. Scene, Camera & Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Build the Multi-Dimensional Particle Geometry
    const particlesCount = 800; // Total count of floating nodes
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        // Distribute coordinates randomly inside a spatial box radius range
        positions[i] = (Math.random() - 0.5) * 12;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // 3. Stylize the Nodes (Clean, custom soft circles fallback)
    const material = new THREE.PointsMaterial({
        color: 0x4F8CFF,     // Matches your --primary-color token
        size: 0.04,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    camera.position.z = 4;

    // 4. Mouse Move Parallax Offset Matrix Track
    let mouseX = 0;
    let mouseY = 0;
    
    window.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    });

    // 5. Continuous Frame Animation Loop Execution
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Slow global cosmic axis track rotations
        particleSystem.rotation.y = elapsedTime * 0.02;
        particleSystem.rotation.x = elapsedTime * 0.01;

        // Smoothly glide particle positions to softly lag behind trackpad positions
        particleSystem.position.x += (mouseX - particleSystem.position.x) * 0.05;
        particleSystem.position.y += (-mouseY - particleSystem.position.y) * 0.05;

        renderer.render(scene, camera);
    }
    animate();

    // 6. Handle Frame Dimension Resize Calculations
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Fire the setup routine instantly when compiled
initializeThreeScene();
