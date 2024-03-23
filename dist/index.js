// Get the input element
const fileInput = document.getElementById("dropzone-file");

// Add event listener for file input change
fileInput.addEventListener("change", handleFileUpload);

// Function to handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0]; // Get the selected file

  console.log("hit1");

  // Check if a file is selected
  if (file) {
    // Display the selected file name
    const fileNameDisplay = document.getElementById("file-name-display");
    fileNameDisplay.textContent = `Selected file: ${file.name}`;
  } else {
    // If no file is selected, display a message
    const fileNameDisplay = document.getElementById("file-name-display");
    fileNameDisplay.textContent = "No file selected";
  }
}
