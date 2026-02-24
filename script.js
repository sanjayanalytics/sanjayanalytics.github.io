// ===============================
// Typing Effect for Data Analyst
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector("header p");
    const text = "Data Analyst";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    textElement.textContent = "";
    typeEffect();
});

// ===============================
// Smooth Scroll Effect
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// ===============================
// Scroll Reveal Animation
// ===============================
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease";
});

const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection();

// ===============================
// Scroll To Top Button
// ===============================
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = (window.scrollY > 300) ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// Modern Modal for Certifications
// ===============================
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside image
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// ===============================
// Horizontal Scroll for Certifications
// ===============================
function scrollCerts(value) {
    const container = document.getElementById("certScroll");
    container.scrollBy({
        left: value,
        behavior: "smooth"
    });
}
