import { API_BASE_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action ="/auction/listings";
const method= "post";

export async function createItem(postData){
    const createItemURL = API_BASE_URL + action;

    const response = await authFetch(createItemURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}