import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"

const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

fixture("Products Tests").page("https://www.saucedemo.com/").beforeEach(async t => {
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
});

test("Log out successful", async t => {
    await ProductsPage.logOut();
    await t.expect(LoginPage.userNameField.exists).ok()
        .expect(LoginPage.passwordField.exists).ok();
});