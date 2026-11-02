// Thread & Tide - Contact Form Validation

const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (contactForm.checkValidity()) {
        contactFeedback.textContent =
            "Thank you! Your message has been validated successfully.";

        contactFeedback.style.color = "#188038";

        contactForm.reset();
    } else {
        contactForm.reportValidity();
    }
});
// Thread & Tide - Back to Top Button

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});