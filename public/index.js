const fetchButton = document.getElementById("fetchButton");
const clearButton = document.getElementById("clearButton");
const resultDiv = document.getElementById("result");
const urlInput = document.getElementById("urlInput");

fetchButton.addEventListener("click", async () => {
    const url = urlInput.value.trim();
    if (url === "") {
        resultDiv.textContent = "Please enter a valid URL.";
        return;
    }

    try {
        const response = await fetch(url);
        const htmlContent = await response.text(); // Get the HTML content
        const textContent = convertToText(htmlContent); // Convert to text
        resultDiv.textContent = textContent; // Display the text
    } catch (error) {
        resultDiv.textContent = "An error occurred: " + error.message;
    }
});

// Function to convert HTML to plain text (similar to previous examples)
function convertToText(html) {
    const temporaryDiv = document.createElement("div");
    temporaryDiv.innerHTML = html;
    return temporaryDiv.textContent || temporaryDiv.innerText || "";
}

// Event listener for the Clear button
clearButton.addEventListener("click", () => {
    resultDiv.textContent = ""; // Clear the content of resultDiv
});
