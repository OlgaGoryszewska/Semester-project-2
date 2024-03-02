import { getItems } from "../listing/get.mjs";
import { renderItemTemplates } from "../templates/item.mjs";
import {displayErrorMessage} from "./errorMessage.mjs"

export function renderPosts() {
  document.addEventListener("DOMContentLoaded", async function () {
    const container = document.querySelector("#container");
    try {
      const items = await getItems();
      renderItemTemplates(items, container);
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      displayErrorMessage(container, "Failed to load posts. Please try again later.");
    }
  });
}


