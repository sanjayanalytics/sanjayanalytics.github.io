// ===============================
// WAIT UNTIL DOM FULLY LOAD
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".modal-overlay");
    const certCards = document.querySelectorAll(".cert-card");

    // Safety check (important)
    if (!modal || !modalImg || certCards.length === 0) return;

    // ===============================
    // OPEN MODAL
    // ===============================
    certCards.forEach(card => {
        card.addEventListener("click", function () {

            const img = this.querySelector("img");
            if (!img) return;

            modalImg.src = img.src;
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // ===============================
    // CLOSE MODAL FUNCTION
    // ===============================
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
        modalImg.src = ""; // Clear image
    }

    // ===============================
    // CLOSE BUTTON
    // ===============================
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // ===============================
    // OVERLAY CLICK CLOSE
    // ===============================
    if (overlay) {
        overlay.addEventListener("click", closeModal);
    }

    // ===============================
    // ESC KEY CLOSE
    // ===============================
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

});
