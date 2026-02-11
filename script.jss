function openTab(event, tabName) {

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
