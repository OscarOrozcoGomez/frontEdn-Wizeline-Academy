import { Selector, t } from "testcafe";

class LoginPage {
    constructor() {
        //Login elements section
        this.userNameField = Selector("#user-name");
        this.passwordField = Selector("#password");
        this.loginButton = Selector("input[type=submit]");
        this.loginErrorText = Selector("h3[data-test*=error]");
    }

    async loginUser(userName, password) {
        await t.typeText(this.userNameField, userName)
            .typeText(this.passwordField, password)
            .click(this.loginButton);
    }
}

export default new LoginPage();