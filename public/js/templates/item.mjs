export function itemTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow", "m-4", "p-4", "space-y-4");

    const title = document.createElement("h2");
    title.innerText = postData.title;
    title.classList.add("font-bold", "text-xl", "mb-2");
    post.appendChild(title);

    const description = document.createElement("p");
    description.innerText = postData.description;
    description.classList.add("text-gray-700", "text-base");
    post.appendChild(description);

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

    if (postData.media && postData.media.length) {
        const image = document.createElement("img");
        image.src = postData.media[0]; // Assuming you want to display the first image
        image.classList.add("w-full", "h-auto", "rounded-md", "mt-2");
        post.appendChild(image);
    }

    // Meta data like creation date, update date, etc., can also be displayed as needed.

    const button = document.createElement("button");
    button.textContent = "Click me";
    button.classList.add("inline-block", "bg-blue-500", "hover:bg-blue-700", "text-white", "py-2", "px-4", "rounded", "mt-4");
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
