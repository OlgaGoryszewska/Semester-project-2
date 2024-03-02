import { login } from "../auth/login.mjs";

export function loginFormHandler() {
  const form = document.querySelector("#login-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    try {
      await login(profile);
      window.location.href = "profile.html";
    } catch (error) {
      document.querySelector("#error-message").textContent = error.message;
    }
  });
}