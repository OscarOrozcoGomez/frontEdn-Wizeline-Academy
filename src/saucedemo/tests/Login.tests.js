import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"

const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const LOCKED_OUT_USER = process.env.SAUCEDEMO_LOCKED_OUT_USER;
const PROBLEM_USER = process.env.SAUCEDEMO_PROBLEM_USER;
const PERFORMANCE_GLITCH_USER = process.env.SAUCEDEMO_PERFORMANCE_GLITCH_USER;
const INVALID_USER = process.env.SAUCEDEMO_INVALID_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

fixture("Login Tests").page("https://www.saucedemo.com/");

test("Login with a valid user", async t => {
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
    await t.expect(await ProductsPage.isPageLoaded()).ok();
});

test("Login with a invalid user", async t => {
    await LoginPage.loginUser(INVALID_USER, PASSWORD);
    await t.expect(LoginPage.loginErrorText.textContent).eql("Epic sadface: Username and password do not match any user in this service")
});