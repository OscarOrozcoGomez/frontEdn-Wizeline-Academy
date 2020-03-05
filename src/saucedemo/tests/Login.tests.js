import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"

//Gathering variable from environment terminal
const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const INVALID_USER = process.env.SAUCEDEMO_INVALID_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

//Including json data
const dataSet = require("../data/Data.json")

fixture("Login Tests").page("https://www.saucedemo.com/");

test("Login with a valid user", async t => {
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
    await LoginPage.clickOnLoginButton();
    await t.expect(await ProductsPage.isPageLoaded()).ok();
});

test("Login with a invalid user", async t => {
    await LoginPage.loginUser(INVALID_USER, PASSWORD);
    await LoginPage.clickOnLoginButton();
    await t.expect(LoginPage.loginErrorText.textContent).eql(dataSet.LoginErrorMessages.UserDontMatchMessage)
});

test("Validate error message when only username is introduced", async t => {
    await LoginPage.populateUserNameField(STANDAR_USER);
    await LoginPage.clickOnLoginButton();
    await t.expect(LoginPage.loginErrorText.textContent).eql(dataSet.LoginErrorMessages.PasswordRequiredMessage)
});

test("Validate error message when only password is introduced", async t => {
    await LoginPage.populatePasswordField(PASSWORD);
    await LoginPage.clickOnLoginButton();
    await t.expect(LoginPage.loginErrorText.textContent).eql(dataSet.LoginErrorMessages.UserRequiredMessage)
});

test("Validate error message when the username or password are wrong", async t => {
    await LoginPage.loginUser(INVALID_USER, PASSWORD);
    await LoginPage.clickOnLoginButton();
    await t.expect(LoginPage.loginErrorText.textContent).eql(dataSet.LoginErrorMessages.UserDontMatchMessage)
});