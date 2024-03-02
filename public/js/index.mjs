// imports for nav bar 

import { menu } from "./handlers/menu.mjs";
import { burger } from "./handlers/menu.mjs";

//imports for registration and login

import { register } from "./auth/register.mjs";
import {registerFormHandler} from "./handlers/register.mjs";
import { loginFormHandler } from "./handlers/login.mjs";

// manipulation of items 

import {createItem} from "./listing/create.mjs"
import { updateItem } from "./listing/update.mjs";
import { removeItem } from "./listing/remove.mjs";
import { getItem } from "./listing/get.mjs";
import { getItems } from "./listing/get.mjs";

// manipulation of templates

import { itemTemplate } from "./templates/item.mjs";
import { renderItemTemplates } from './templates/item.mjs';
import * as templates from "./templates/item.mjs"
import * as itemMethods from "./listing/index.mjs"

// handlers for items 

import { loadInitialPosts, loadMorePosts } from './logic/loadMoreButton.mjs';
import {setCreateFormListener} from "./handlers/index.mjs"
//import * as listing from "./listing/index.mjs"

// Initial load for the posts

document.addEventListener('DOMContentLoaded', loadInitialPosts);

// "Load More" button setup

document.getElementById('load-more').addEventListener('click', loadMorePosts);


// router for paths

const path = location.pathname;

if(path === '/register.html'){
    registerFormHandler()

} else if( path ==='/login-form.html'){
    loginFormHandler()
    
} else if (path === "/add-item.html"){
    setCreateFormListener()

}




// Loading only 10 posts on the page

async function testTemplate() {
    const items = await itemMethods.getItems();
    const firstTenItems = items.slice(0, 10);
    const container = document.querySelector("#container");
    renderItemTemplates(firstTenItems, container);
}

testTemplate()
