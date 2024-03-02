import {login} from "../auth/login.mjs";

export function loginFormHandler(){

    const form = document.querySelector("#login-form")

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    
    //Send it to the API
    login(profile).then(response =>{
        window.location.href = 'profile.html';
    })
})
}