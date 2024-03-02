import { load } from "../storage/index.mjs";

export async function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
}

export async function authFetch(url, options) {
    try {
        const fetchOptions = {
            ...options,
            headers: await headers() // Wait for the headers to be resolved
        };
        const response = await fetch(url, fetchOptions);
        return response;
    } catch (error) {
        console.error("Error in authFetch:", error);
        throw error; // Re-throw the error to be handled elsewhere if needed
    }
}
