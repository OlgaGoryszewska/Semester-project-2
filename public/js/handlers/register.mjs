import {register} from "../api/register-api.mjs";

export function registerFormHandler(){

    const form = document.querySelector("#register-form")

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    
    //Send it to the API
    register(profile)
})
}
