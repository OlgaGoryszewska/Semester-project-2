import {updateItem} from "../listing/update.mjs";

export function setUpdateFormListener(){

    const form = document.querySelector("#updateForm")
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    post.id =id;
    
    //Send it to the API
    updateItem(post)
})
}