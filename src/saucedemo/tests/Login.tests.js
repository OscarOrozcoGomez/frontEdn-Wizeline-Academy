import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"

const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const LOCKED_OUT_USER = process.env.SAUCEDEMO_LOCKED_OUT_USER;
const PROBLEM_USER = process.env.SAUCEDEMO_PROBLEM_USER;
const PERFORMANCE_GLITCH_USER = process.env.SAUCEDEMO_PERFORMANCE_GLITCH_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

fixture("Login Tests").page("https://www.saucedemo.com/");

test("Login with a valid user", async t => {
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
    await t.expect(await ProductsPage.isPageLoaded()).ok();
});