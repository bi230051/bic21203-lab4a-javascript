
function generateNumbers() {

    // Select the ordered list
    const numberList = document.getElementById("numberList");

    // Clear previous items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set the text
        listItem.textContent = "The number is " + i;

        // Add the item to the list
        numberList.appendChild(listItem);
    }
}

// Attach click event
document.getElementById("generateBtn").addEventListener("click", generateNumbers);
