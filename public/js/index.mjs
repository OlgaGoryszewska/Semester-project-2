import { menu } from "./handlers/menu.mjs";
import { burger } from "./handlers/menu.mjs";
import { register } from "./api/register-api.mjs";
import {setRegisterFormListener} from "./auth/register.mjs";


setRegisterFormListener()
register()