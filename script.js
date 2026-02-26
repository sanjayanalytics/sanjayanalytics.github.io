// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

    // ================= MODAL VARIABLES =================
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

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });


    // ================= TYPING EFFECT =================
    const text = "Data Analyst";
    let index = 0;
    const typingElement = document.querySelector(".typing-text");

    function typeEffect() {
        if (typingElement && index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();


    // ================= SCROLL TO TOP BUTTON =================
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function () {
        if (scrollBtn) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }
    });

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
