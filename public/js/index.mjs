
import { menu } from "./handlers/menu.mjs";
import { burger } from "./handlers/menu.mjs";

import { registerFormHandler } from "./handlers/register.mjs";
import { loginFormHandler } from "./handlers/login.mjs";
import { setCreateFormListener } from "./handlers/index.mjs";
import { renderPosts } from "./logic/renderPosts.mjs";
import { logoutHandler } from "./handlers/logoutHandler.mjs";
import { getProfile } from "./handlers/getProfile.mjs";
import {displayProfileCredits} from "./templates/index.mjs"
import {displayProfile} from "./templates/index.mjs"
import { displayErrorMessage } from "./logic/index.mjs"




function router(){
    const path = location.pathname;
    
    logoutHandler();
   

    switch (path) {
      case "/":
      case "/index.html":
        renderPosts();
        break;
      case "/edit.html":
        displayProfileCredits();
        displayProfile();
        getProfile();
        break;
      case "/profile.html":
        displayProfileCredits();
        getProfile();
        displayProfile();
        break;
      case "/login.html":
        renderPosts();
        break;
      case "/auction.html":
        renderPosts();
        break;
      case "/register.html":
        displayErrorMessage();
        registerFormHandler();
        break;
      case "/login-form.html":
        loginFormHandler();
        break;
      case "/add-item.html":
        setCreateFormListener();
        break;
      default:
        // Handle default case here
        break;
    }
    }
    router();



