function openModal(element) {
    const imgSrc = element.querySelector("img").src;
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}
