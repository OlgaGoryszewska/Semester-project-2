import { API_BASE_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action ="/auction/listings/";
const method= "delete";

export async function removeItem(id){
    if(!id){
        throw new Error ("Delate requires a post ID");
    }
    const removeItemURL = `${API_BASE_URL}${action}${id}`;

    const response = await authFetch(removeItemURL, {
        method,
    
    })

   return await response.json();


}
