
// Select the paragraph
const message = document.getElementById("message");

// Select the button
const button = document.getElementById("changeBtn");

// Create the function
function changeMessage() {
    message.textContent = "Hello there!";
}

// Attach the click event
button.addEventListener("click", changeMessage);

 