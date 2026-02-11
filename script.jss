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
