import { API_BASE_URL } from "../api/constants.mjs";

export async function login(profile) {
    const action = "/auction/auth/login";
    const loginURL = API_BASE_URL + action;

    try {
        const response = await fetch(loginURL, {
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
        console.error("Error while logining:", error);
    }
}
