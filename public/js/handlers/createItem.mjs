import { createItem } from "../listing/create.mjs";

export function setCreateFormListener() {
    const form = document.querySelector("#createForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let profile = Object.fromEntries(formData.entries());

        // Assuming 'tags' is a comma-separated string, split it into an array.
        // Check if 'tags' exists to avoid errors on forms without a 'tags' input.
        if (profile.tags) {
            profile.tags = profile.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
        }

        // Send it to the API
        createItem(profile).then(response => {
            console.log("Item created:", response);
            // Handle successful item creation (e.g., redirect or show a message)
        }).catch(error => {
            console.error("Error creating item:", error);
            // Handle errors (e.g., show error message to the user)
        });
    });
}
