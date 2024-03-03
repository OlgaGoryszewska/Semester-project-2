export function displayErrorMessage(message) {
  const errorMessageDiv = document.getElementById("error-message")("#error-message");
  if (!errorMessageDiv) {
      console.error("Error message container not found.");
      return;
  }

  errorMessageDiv.textContent = message;
  errorMessageDiv.classList.remove("hidden"); 

}