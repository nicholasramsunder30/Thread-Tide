// Thread & Tide - Enquiry Form Validation

const enquiryForm = document.getElementById("enquiryForm");
const enquiryFeedback = document.getElementById("enquiryFeedback");

enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (enquiryForm.checkValidity()) {
        enquiryFeedback.textContent =
            "Thank you! Your enquiry has been validated successfully.";

        enquiryFeedback.style.color = "#188038";

        enquiryForm.reset();
    } else {
        enquiryForm.reportValidity();
    }
});