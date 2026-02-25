// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".modal-overlay");
    const certCards = document.querySelectorAll(".cert-card");

    // ================= OPEN MODAL =================
    certCards.forEach(card => {
        card.addEventListener("click", function () {
            const img = this.querySelector("img");
            modalImg.src = img.src;
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // ================= CLOSE MODAL =================
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });

});
