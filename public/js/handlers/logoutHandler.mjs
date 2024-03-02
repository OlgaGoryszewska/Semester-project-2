import * as storage from "../storage/index.mjs";

export function logoutHandler() {
  const logoutButton = document.querySelector("#logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }
}

function logout() {
  storage.clear();
  window.location.href = "/";
}