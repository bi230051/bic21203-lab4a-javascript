
function checkInput() {

    // Get the user's input
    const input = document.getElementById("userInput").value.trim();

    // Select the result paragraph
    const result = document.getElementById("result");

    // Convert input into a number
    const number = Number(input);

    // Check the input
    if (input === "" || !Number.isFinite(number)) {

        result.textContent = "Please enter a valid number!";

    } else if (number < 10) {

        result.textContent = "The number is lower than 10";

    } else if (number > 10) {

        result.textContent = "The number is higher than 10";

    } else {

        result.textContent = "The number is equal to 10";

    }
}

// Attach click event to the button
document.getElementById("checkBtn").addEventListener("click", checkInput);
