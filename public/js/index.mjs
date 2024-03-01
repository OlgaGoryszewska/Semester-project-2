import { menu } from "./handlers/menu.mjs";
import { burger } from "./handlers/menu.mjs";
import { register } from "./auth/register.mjs";
import {registerFormHandler} from "./handlers/register.mjs";
import { loginFormHandler } from "./handlers/login.mjs";
import {createItem} from "./listing/create.mjs"
import { updateItem } from "./listing/update.mjs";
import { removeItem } from "./listing/remove.mjs";
import { getItem } from "./listing/get.mjs";
import { getItems } from "./listing/get.mjs";

import { itemTemplate } from "./templates/item.mjs";
import { renderItemTemplates } from './templates/item.mjs';
import * as templates from "./templates/item.mjs"
import * as itemMethods from "./listing/index.mjs"

import { loadInitialPosts, loadMorePosts } from './logic/loadMoreButton.mjs';

// Setup the initial load
document.addEventListener('DOMContentLoaded', loadInitialPosts);

// Setup the "Load More" button
document.getElementById('load-more').addEventListener('click', loadMorePosts);






//import * as listing from "./listing/index.mjs"


const path = location.pathname;

if(path === '/register.html'){
    registerFormHandler()
} else if( path ==='/login-form.html'){
    loginFormHandler()
}

async function testTemplate() {
    const items = await itemMethods.getItems();
    const firstTenItems = items.slice(0, 10); // Get only the first 10 items
    const container = document.querySelector("#container");
    renderItemTemplates(firstTenItems, container);
}


testTemplate()
