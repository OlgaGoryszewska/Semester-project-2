
import { getItems } from "../listing/get.mjs"
import { renderItemTemplates } from '../templates/item.mjs';

let currentPage = 0;
const postsPerPage = 10;

export async function loadInitialPosts() {
    currentPage = 0; // Reset or set to initial page
    await loadMorePosts(); // Load first set of posts
}

export async function loadMorePosts() {
    const items = await getItems(); // Fetch all items
    const startIndex = currentPage * postsPerPage;
    const selectedItems = items.slice(startIndex, startIndex + postsPerPage);
    const container = document.querySelector("#container");
    
    if (currentPage === 0) {
        container.innerHTML = ''; // Clear container on initial load
    }

    renderItemTemplates(selectedItems, container);
    currentPage++; // Prepare for next page

    // Optionally, hide the "Load More" button if no more posts to load
    if (startIndex + postsPerPage >= items.length) {
        document.getElementById('load-more').style.display = 'none';
    } else {
        document.getElementById('load-more').style.display = ''; // Ensure button is visible if there are more posts
    }
}


