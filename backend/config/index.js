import { PASSWORD_D, EMAIL_D, MAIN_URL_D } from "./dev.js";
import { PASSWORD_P, EMAIL_P, MAIN_URL_P } from "./prod.js";

let PASSWORD, EMAIL, MAIN_URL;

if (process.env.NODE_ENV === "production") {
  PASSWORD = PASSWORD_P;
  EMAIL = EMAIL_P;
  MAIN_URL = MAIN_URL_P;
} else {
  PASSWORD = PASSWORD_D;
  EMAIL = EMAIL_D;
  MAIN_URL = MAIN_URL_D;
}

export { PASSWORD, EMAIL, MAIN_URL };
