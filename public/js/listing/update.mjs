import { API_BASE_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action ="/auction/listings/";
const method= "put";

export async function updateItem(postData){
    if(!postData.id){
        throw new Error ("Update requires a post ID");
    }
    const updateItemURL = `${API_BASE_URL}${action}${postData.id}`;

    const response = await authFetch(updateItemURL, {
        method,
        body: JSON.stringify()
    })

   return await response.json();


    

 
}