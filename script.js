// ================= OPEN MODAL =================
function openModal(card) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");

    // Get image inside clicked card
    const img = card.querySelector("img");

    // Set modal image source
    modalImg.src = img.src;

    // Show modal
    modal.classList.add("active");

    // Disable background scroll
    document.body.style.overflow = "hidden";
}

// ================= CLOSE MODAL =================
function closeModal() {
    const modal = document.getElementById("certModal");

    modal.classList.remove("active");

    // Enable scroll again
    document.body.style.overflow = "auto";
}

// ================= CLOSE WHEN CLICKING OUTSIDE =================
document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.querySelector(".modal-overlay");

    if (overlay) {
        overlay.addEventListener("click", closeModal);
    }

    // Close on ESC key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });

});
