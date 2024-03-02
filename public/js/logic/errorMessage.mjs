export function displayErrorMessage(container, message) {
 
    let errorMessage = container.querySelector(".error-message");
    if (!errorMessage) {
      errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message"); 
      container.appendChild(errorMessage);
    }
    errorMessage.textContent = message;
    errorMessage.style.color = "red"; 
    
  }
