export function registerFormHandler() {
    const form = document.querySelector("#register-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        
        register(profile).then(response => {
            
            window.location.href = 'login-form.html';
        }).catch(error => {

            displayErrorMessage("An error occurred during registration. Please try again.");
        });
    });
}

function displayErrorMessage(message) {
    const errorMessageDiv = document.querySelector("#error-message");
    if (!errorMessageDiv) {
        console.error("Error message container not found.");
        return;
    }

    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.remove("hidden"); 
}
