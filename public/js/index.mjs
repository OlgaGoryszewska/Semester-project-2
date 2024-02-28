import { menu } from "./handlers/menu.mjs";
import { burger } from "./handlers/menu.mjs";
import { register } from "./auth/register.mjs";
import {registerFormHandler} from "./handlers/register.mjs";
import { loginFormHandler } from "./handlers/login.mjs";
import {createItem} from "./listing/create.mjs"

//import * as listing from "./listing/index.mjs"


const path = location.pathname;

if(path === '/register.html'){
    registerFormHandler()
} else if( path ==='/login-form.html'){
    loginFormHandler()
}

updItem({
    title: "example",
    description: "example",
    endsAt: "2025-01-01T00:00:00.000Z",
})

//Object { id: "b00104f6-3eb4-4649-b9a7-4a31efddb481", title: "example", description: "example", media: [], tags: [], created: "2024-02-28T20:50:26.605Z", updated: "2024-02-28T20:50:26.605Z", endsAt: "2025-01-01T00:00:00.000Z", _count: {…} }