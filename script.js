// ===============================
// DOM LOADED
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Typing Effect
    // ===============================
    const titleElement = document.querySelector(".title");
    const text = "Data Analyst";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    titleElement.textContent = "";
    typeEffect();


    // ===============================
    // Scroll Fade-In Animation
    // ===============================
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease";
        observer.observe(section);
    });


    // ===============================
    // Active Button Highlight on Scroll
    // ===============================
    const navLinks = document.querySelectorAll(".top-buttons a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });


    // ===============================
    // NEW CERTIFICATE MODAL (UPDATED)
    // ===============================

    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    const certImages = document.querySelectorAll(".cert-card img");
    const closeBtn = document.querySelector(".close");

    certImages.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});
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
