/*=========================================================
                GSAP ANIMATIONS
=========================================================*/

window.addEventListener("load", () => {

    if (typeof gsap === "undefined") return;

    /*=========================
            HERO
    =========================*/

    const tl = gsap.timeline();

    tl.from(".navbar", {

        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"

    })

    .from(".hero-subtitle", {

        y: 40,
        opacity: 0,
        duration: .6

    }, "-=.5")

    .from(".hero-left h1", {

        y: 60,
        opacity: 0,
        duration: .8

    }, "-=.4")

    .from(".hero-description", {

        y: 40,
        opacity: 0,
        duration: .7

    }, "-=.5")

    .from(".hero-buttons", {

        y: 40,
        opacity: 0,
        duration: .7

    }, "-=.4")

    .from(".hero-right", {

        scale: .9,
        opacity: 0,
        duration: 1

    }, "-=.8");

});

/*=========================================================
            SCROLL REVEAL
=========================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            gsap.to(entry.target, {

                opacity: 1,

                y: 0,

                duration: .8,

                ease: "power3.out"

            });

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".fade-up").forEach(item => {

    observer.observe(item);

});