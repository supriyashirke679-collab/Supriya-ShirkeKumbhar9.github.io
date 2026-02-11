function openTab(event, tabName) {
// Feedback Form Submission
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Basic validation already handled by required attribute
        message.textContent = "Thank you! Your feedback has been submitted successfully.";

        // Reset form
        form.reset();
    });

});


    // Get all tab contents
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => {
        content.classList.remove("active");
    });

    // Remove active class from all buttons
    let buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Show selected tab
    document.getElementById(tabName).classList.add("active");

    // Highlight selected button
    event.currentTarget.classList.add("active");
}
// Star Rating System
const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("ratingValue");

stars.forEach(star => {
    star.addEventListener("click", function () {

        let value = this.getAttribute("data-value");
        ratingInput.value = value;

        stars.forEach(s => s.classList.remove("active"));

        for (let i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }
    });
});


// Enhanced Form Submission
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const rating = ratingInput.value;
    const subject = document.getElementById("subjectSelect").value;
    const messageBox = document.getElementById("formMessage");

    if (!rating) {
        messageBox.style.color = "red";
        messageBox.textContent = "Please select a star rating.";
        return;
    }

    messageBox.style.color = "green";
    messageBox.textContent = "Thank you! Your feedback has been submitted successfully.";

    this.reset();
    stars.forEach(s => s.classList.remove("active"));
});

