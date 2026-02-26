// ================= WAIT UNTIL PAGE LOAD =================
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MODAL FUNCTIONALITY
    ====================================================== */

    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".modal-overlay");
    const certCards = document.querySelectorAll(".cert-card");

    if (modal && modalImg && certCards.length > 0) {

        certCards.forEach(card => {
            card.addEventListener("click", function () {
                const img = this.querySelector("img");
                if (img) {
                    modalImg.src = img.src;
                    modal.classList.add("active");
                    document.body.style.overflow = "hidden";
                }
            });
        });

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
    }


    /* =====================================================
       TYPING EFFECT (Professional Loop Version)
    ====================================================== */

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const words = ["Data Analyst", "Power BI Developer", "Excel Dashboard Expert"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex--);
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex++);
            }

            let typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 1500;
                isDeleting = true;
            } 
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 300;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    }


    /* =====================================================
       SCROLL TO TOP BUTTON
    ====================================================== */

    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* =====================================================
       ACTIVE NAVIGATION HIGHLIGHT
    ====================================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });

});
