import { API_BASE_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action ="/auction/listings/";
const method= "get";

export async function getItems(){
    const getItemsURL = `${API_BASE_URL}${action}`;

    console.log(`Request URL: ${getItemsURL}`);

    const response = await authFetch(getItemsURL,{
        method
    })

    return await response.json();
}



//export async function getItem(id){
    //if(!id){
        //throw new Error ("Get requires a post ID");
    //}
    //const getItemURL = `${API_BASE_URL}${action}${id}`;

    //const response = await authFetch(getItemURL, {
        //method,
    
    //})

   //return await response.json();
//}
