import { API_BASE_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action ="/auction/listings/<id>";
const method= "put";

export async function updateItem(postData){
    const updateItemURL = `${API_BASE_URL}${action}${postData.id}`  ;

    const response = await authFetch(updateItemURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();

 
}