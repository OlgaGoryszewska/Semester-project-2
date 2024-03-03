import { authFetch } from '../authFetch.mjs'; 
import {API_BASE_URL} from "../constants.mjs"

/**
 * Submits a bid on a listing.
 * @param {string} listingId - The ID of the listing to bid on.
 * @param {number} amount - The amount of the bid.
 * @returns {Promise<Object>} The response data from the API.
 */
export async function submitBid(listingId, amount) {
    const url = `${API_BASE_URL}${API_LISTINGS_URL}${listingId}/bids`;
    const response = await authFetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount })
    });

    if(!response.ok){
        throw new Error(json.Errors[0].message);

    }
    return json;
}