import {API_BASE_URL } from "./constants.mjs";

const action = "/auction/auth/register";
const method ="post";

export async function register (profile){
    console.log(action);
    const registerURL = API_BASE_URL + action;
    console.log(registerURL);
    
}
