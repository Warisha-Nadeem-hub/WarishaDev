/*=========================================================
                    LOADER
=========================================================*/

function initializeLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            document.body.classList.add("loaded");

        }, 1200);

    });

}

// 👑 FIX: Call the function so it actually runs!
initializeLoader();
