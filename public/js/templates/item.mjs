export function itemTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow-lg", "m-4", "p-4", "space-y-4");

    // Title
    const title = document.createElement("h2");
    title.innerText = postData.title;
    title.classList.add("font-bold", "text-xl", "mb-2");
    post.appendChild(title);

    // Description
    const description = document.createElement("p");
    description.innerText = postData.description;
    description.classList.add("text-gray-700", "text-base");
    post.appendChild(description);

    // Tags
    if (postData.tags && postData.tags.length) {
        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("flex", "flex-wrap", "gap-2", "mt-2");
        postData.tags.forEach(tag => {
            const tagEl = document.createElement("span");
            tagEl.innerText = tag;
            tagEl.classList.add("bg-blue-100", "text-blue-800", "px-2", "py-1", "rounded-full", "text-xs", "font-semibold");
            tagsContainer.appendChild(tagEl);
        });
        post.appendChild(tagsContainer);
    }

    // Media
    if (postData.media && postData.media.length) {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("flex", "flex-wrap", "justify-center", "gap-4");
        postData.media.forEach(media => {
            const img = document.createElement("img");
            img.src = media;
            img.classList.add("w-full", "max-w-xs", "h-auto", "rounded-md", "mt-2");
            imageContainer.appendChild(img);
        });
        post.appendChild(imageContainer);
    }

    // Creation Date
    const createdDate = document.createElement("p");
    createdDate.innerText = `Created: ${new Date(postData.created).toLocaleDateString()}`;
    createdDate.classList.add("text-gray-600", "text-xs");
    post.appendChild(createdDate);

    // Update Date
    if (postData.updated) {
        const updatedDate = document.createElement("p");
        updatedDate.innerText = `Updated: ${new Date(postData.updated).toLocaleDateString()}`;
        updatedDate.classList.add("text-gray-600", "text-xs");
        post.appendChild(updatedDate);
    }

    // Ends At
    if (postData.endsAt) {
        const endsAt = document.createElement("p");
        endsAt.innerText = `Ends At: ${new Date(postData.endsAt).toLocaleDateString()}`;
        endsAt.classList.add("text-red-500", "text-xs");
        post.appendChild(endsAt);
    }

    // Bid Count
    const bidCount = document.createElement("p");
    bidCount.innerText = `Bids: ${postData._count.bids}`;
    bidCount.classList.add("text-gray-800", "font-bold", "text-sm");
    post.appendChild(bidCount);

     // "Edit" Button
     const editButton = document.createElement("button");
     editButton.textContent = "Edit";
     editButton.classList.add("inline-block", "bg-green-500", "hover:bg-green-700", "text-black", "py-2", "px-4", "rounded", "mt-4", "mr-2");
     editButton.addEventListener("click", () => {
         window.location.href = `edit-item.html?id=${postData.id}`;
     });
     post.appendChild(editButton);

    // " Bid " Button
    const button = document.createElement("button");
    button.textContent = "Bid";
    button.classList.add("inline-block", "bg-blue-500", "hover:bg-blue-700", "text-black", "py-2", "px-4", "rounded", "mt-4");
    button.addEventListener("click", () => console.log(postData));
    post.appendChild(button);

    return post;
}


export async function renderItemTemplates(postsData, parent){
    postsData.forEach(postData => {
        const itemElement = itemTemplate(postData);
        parent.append(itemElement);
    });
}
