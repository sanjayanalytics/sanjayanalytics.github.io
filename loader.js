// ================= SAFE PREMIUM LOADER FIX =================

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("premiumLoader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            document.body.style.overflow = "auto";
        }, 1200);
    }

});
