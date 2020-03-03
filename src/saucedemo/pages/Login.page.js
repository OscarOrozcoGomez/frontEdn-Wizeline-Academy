import { Selector, t } from "testcafe";

class LoginPage {
    constructor(){
        //Login elements section
        this.userNameField = Selector("#user-name");
        this.passwordField = Selector("#password");
        this.loginButton = Selector("input[type=submit]");
    }
}