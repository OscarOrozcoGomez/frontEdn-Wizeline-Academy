import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"
import CheckOutPage from "../pages/CheckOut.page"
import ShoppingCartPage from "../pages/ShoppingCart.page"

const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const LOCKED_OUT_USER = process.env.SAUCEDEMO_LOCKED_OUT_USER;
const PROBLEM_USER = process.env.SAUCEDEMO_PROBLEM_USER;
const PERFORMANCE_GLITCH_USER = process.env.SAUCEDEMO_PERFORMANCE_GLITCH_USER;
const INVALID_USER = process.env.SAUCEDEMO_INVALID_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

fixture("Checkout Page Tests").page("https://www.saucedemo.com/").beforeEach(async t =>{
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
    await ProductsPage.addItemToCart(3);
    await ProductsPage.navigateToShoppingCartPage();
    await ShoppingCartPage.isPageLoaded();
});

test("Continue with missing mail information", async t =>{
   await CheckOutPage.isPageLoaded();
   await CheckOutPage.navigateToCheckoutPage();
   await CheckOutPage.clickOnContinueButton()
   await t.expect(CheckOutPage.firstNameErrorText.textContent).eql("Error: First Name is required")
});