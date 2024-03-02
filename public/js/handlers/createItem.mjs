import { createItem } from "../listing/create.mjs";

export function setCreateFormListener() {
    document.querySelector("#createForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let profile = Object.fromEntries(formData.entries());

     
        profile.tags = profile.tags ? profile.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

   
        profile.media = profile.media ? [profile.media] : [];

        
        try {
            const response = await createItem(profile);
            console.log("Item created:", response);
       
        } catch (error) {
        
            console.error("Error creating item:", error);
  
        }
    });
}
