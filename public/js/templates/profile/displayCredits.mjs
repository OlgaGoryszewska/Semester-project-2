import { fetchProfile } from "../../api/profile/fetchProfile.mjs";
import * as storage from "../../storage/index.mjs"


export async function displayProfileCredits() {
    try {
        const name = storage.getProfileName(); 
        if (!name) {
            throw new Error("There is no profile name");
        }
        const profile = await fetchProfile(name);
        console.log(profile);
        const creditContainer = document.querySelector("#credits-container");
        creditContainer.innerHTML = `Credits: ${profile.credits}`;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayProfileCredits();
});
