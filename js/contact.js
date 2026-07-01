/**
 * CONTACT FORM ENGINE
 * Handles interactive button submission states and success UI animations.
 */
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("portfolio-contact-form");
    const submitBtn = document.querySelector(".submit-glow-btn");

    if (!contactForm || !submitBtn) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Stops the page from reloading

        // 1. Cache original content and switch to a Loading State
        const originalBtnContent = submitBtn.innerHTML;
        submitBtn.style.pointerEvents = "none";
        submitBtn.innerHTML = `
            <span>Sending...</span>
            <div class="btn-spinner"></div>
        `;

        // 2. Simulate API Network Delay (e.g., EmailJS or Formspree processing)
        setTimeout(() => {
            // Restore button properties
            submitBtn.innerHTML = `<span>Message Sent! ✨</span>`;
            submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)"; // Vibrant Success Green
            submitBtn.style.boxShadow = "0 10px 25px rgba(16, 185, 129, 0.4)";

            // 3. Trigger a Premium Success Panel Glow
            const glassCard = document.querySelector(".glass-card");
            glassCard.style.borderColor = "rgba(16, 185, 129, 0.5)";
            glassCard.style.boxShadow = "0 40px 70px rgba(16, 185, 129, 0.15)";

            // 4. Reset Form Fields
            contactForm.reset();

            // 5. Cooldown: Reset button back to normal layout after 4 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.style.background = ""; // Falls back to stylesheet CSS
                submitBtn.style.boxShadow = "";
                submitBtn.style.pointerEvents = "all";
                glassCard.style.borderColor = "";
                glassCard.style.boxShadow = "";
            }, 4000);

        }, 1800); // 1.8 seconds processing duration simulation
    });
});