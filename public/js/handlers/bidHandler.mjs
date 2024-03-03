// handlers/bidHandler.mjs
import { submitBid } from '../api/posts/biding.mjs';

export function setupBidButtonListener(button, listingId) {
    button.addEventListener('click', async () => {

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
