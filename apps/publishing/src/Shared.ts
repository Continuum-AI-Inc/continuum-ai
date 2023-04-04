import { getCookie } from "./Cookies";

const LINK_TOKEN = "e0737bda9be4b4be936611ebb81ffed9bf74d8d1f8adc7384a4589f1797233d0";

const AUTH_TOKEN = getCookie("__auth_token__");
const USER_NAME = getCookie("__user_name__");
const USER_EMAIL = getCookie("__user_email__");

export { default as Continuum } from "./link";
export { LINK_TOKEN };
export { AUTH_TOKEN, USER_NAME, USER_EMAIL };