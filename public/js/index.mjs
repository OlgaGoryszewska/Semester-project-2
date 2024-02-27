import { menu } from "./handlers/menu.mjs";
import { burger } from "./handlers/menu.mjs";
import { register } from "./auth/register.mjs";
import {registerFormHandler} from "./handlers/register.mjs";
import { loginFormHandler } from "./handlers/login.mjs";

import * as listing from "./listing/index.mjs"


const path = location.pathname;

if(path === '/register.html'){
    registerFormHandler()
} else if( path ==='/login-form.html'){
    loginFormHandler()
}


