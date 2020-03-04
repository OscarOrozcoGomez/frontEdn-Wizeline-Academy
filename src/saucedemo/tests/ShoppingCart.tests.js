import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"
import ShoppingCart from "../pages/ShoppingCart.page"

const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const LOCKED_OUT_USER = process.env.SAUCEDEMO_LOCKED_OUT_USER;
const PROBLEM_USER = process.env.SAUCEDEMO_PROBLEM_USER;
const PERFORMANCE_GLITCH_USER = process.env.SAUCEDEMO_PERFORMANCE_GLITCH_USER;
const INVALID_USER = process.env.SAUCEDEMO_INVALID_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

fixture("Products Tests").page("https://www.saucedemo.com/").beforeEach(async t =>{
    await t.debug()
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
});

test("Navigate to the shopping cart", async t =>{
    await ProductsPage.navigateToShoppingCartPage();
    await ShoppingCart.isPageLoaded();
});