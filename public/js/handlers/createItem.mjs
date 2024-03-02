
import { createItem } from "../listing/create.mjs";
import { itemTemplate } from "../templates/item.mjs"; 

export function setCreateFormListener() {
    document.querySelector("#createForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let profile = Object.fromEntries(formData.entries());


        profile.tags = profile.tags ? profile.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
        profile.media = profile.media ? [profile.media] : [];
        
        try {
            const newItem = await createItem(profile); 
            console.log("Item created:", newItem);
            renderItemOnPage(newItem); 
        } catch (error) {
            console.error("Error creating item:", error);

        }
    });
}


function renderItemOnPage(item) {
    const container = document.querySelector("#container");
    const itemElement = itemTemplate(item); 
    container.prepend(itemElement); 
}
