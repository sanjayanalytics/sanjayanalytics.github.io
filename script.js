// ================= CERTIFICATE MODAL SCRIPT =================

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    const overlay = document.querySelector(".modal-overlay");

    // Open Modal
    window.openModal = function (imageSrc) {
        if (!modal || !modalImg) return;

        modalImg.src = imageSrc;
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    // Close Modal
    window.closeModal = function () {
        if (!modal) return;

        modal.classList.remove("active");
        modalImg.src = ""; // Clear image
        document.body.style.overflow = "auto";
    };

    // Close when clicking overlay
    if (overlay) {
        overlay.addEventListener("click", closeModal);
    }

    // Close on ESC key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

});
