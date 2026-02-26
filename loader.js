// ================= PREMIUM LOADER =================

window.addEventListener("load", function () {
    const loader = document.getElementById("premiumLoader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        document.body.style.overflow = "auto";
    }, 800);
});
