import { authFetch } from "../authFetch.mjs";
import { API_BASE_URL, API_PROFILE_URL } from "../constants.mjs";

export async function fetchProfile(name){
    const url = `${API_BASE_URL}${API_PROFILE_URL}/${name}`;

    const response = await authFetch(url);

    const json = await response.json();

    if(!response.ok){
        throw new Error(json.Errors[0].message);

    }
    return json;
}