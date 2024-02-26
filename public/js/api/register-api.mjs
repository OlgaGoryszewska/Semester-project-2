import { API_BASE_URL } from "./constants.mjs";

export async function register(profile) {
    const action = "/auction/auth/register";
    const registerURL = API_BASE_URL + action;

    try {
        const response = await fetch(registerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        });

        if (!response.ok) {
            const responseData = await response.json();
            console.error("Error response from server:", responseData);
            console.error("HTTP Status Code:", response.status);
           
            return
        }

        const result = await response.json();
        console.log("Registration successful:", result);
    } catch (error) {
        console.error("Error while registering:", error);
    }
}
