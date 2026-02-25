function openModal(imageSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = imageSrc;
    modal.classList.add("active");

    document.body.style.overflow = "hidden"; // prevent background scroll
}

function closeModal() {
    const modal = document.getElementById("certModal");
    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}

// Close when clicking outside image
document.querySelector(".modal-overlay").addEventListener("click", closeModal);

// Close on ESC key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

function openModal(card) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    const img = card.querySelector("img");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});
