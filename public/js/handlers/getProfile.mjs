import * as storage from "../storage/index.mjs"
import { fetchProfile } from "../api/profile/fetchProfile.mjs";

export async function getProfile(){
    try{
        const name = storage.getProfileName();
        if (!name){
            throw new Error("There is no profile name");

        }
        const profile = await fetchProfile(name);
        console.log(profile);
    }
    catch(error){
        console.log(error);
    }

}