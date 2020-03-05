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
        await this.populateUserNameField(userName);
        await this.populatePasswordField(password);
    }

    async populateUserNameField(userName){
        await t.expect(this.userNameField.exists).ok()
        .typeText(this.userNameField, userName);
    }

    async populatePasswordField(password){
        await t.expect(this.passwordField.exists).ok()
        .typeText(this.passwordField, password);
    }

    async clickOnLoginButton(){
        await t.expect(this.loginButton.exists).ok()
        .click(this.loginButton);
    }

}

export default new LoginPage();