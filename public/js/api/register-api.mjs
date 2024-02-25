import {API_BASE_URL } from "./constants.mjs";

const action = "/auction/auth/register";
const method ="post";

export async function register (profile){
    const registerURL = API_BASE_URL + action;
    const body =JSON.stringify(profile);

    const response = await fetch(registerURL,{
        headers:{
            "Content-Type": "aplication/json"
        },
        method,
        body

    })
    const result = await response.json()
    console.log(result);
}
