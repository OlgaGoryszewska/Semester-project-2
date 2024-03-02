import {createItem} from "../listing/create.mjs";

export function setCreateFormListener(){

    const form = document.querySelector("#createForm")

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    
    //Send it to the API
    createItem(profile)
})
}