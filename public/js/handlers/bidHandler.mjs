
import { submitBid } from '../api/posts/biding.mjs';
import {isUserAuthenticated} from "../api/authFetch.mjs"

export function setupBidButtonListener(button, listingId) {
    button.addEventListener('click', async () => {
        if (!isUserAuthenticated()) {
            // Here you might want to redirect to login or show a modal, as discussed
            alert('You must be logged in to place a bid.');
            return;
        }

        const amount = parseFloat(prompt('Enter your bid amount:'));
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid bid amount.');
            return;
        }

        try {
            await submitBid(listingId, amount);
            alert('Bid placed successfully!');
        } catch (error) {
            console.error('Error placing bid:', error);
            alert('Failed to place bid. Please try again.');
        }
    });
}