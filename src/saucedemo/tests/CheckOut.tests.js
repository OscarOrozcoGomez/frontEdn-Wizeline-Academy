import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"
import CheckOutPage from "../pages/CheckOut.page"
import ShoppingCartPage from "../pages/ShoppingCart.page"
import CheckoutOverviewPage from "../pages/CheckoutOverview.page"

//Gathering variable from environment terminal
const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;
const FIRST_NAME = process.env.SAUCEDEMO_NAME;
const LAST_NAME = process.env.SAUCEDEMO_LAST_NAME;
const ZIP_CODE = process.env.SAUCEDEMO_ZIP_CODE;

//Including json data
const dataSet = require("../data/Data.json")

fixture("Checkout Page Tests").page("https://www.saucedemo.com/").beforeEach(async t => {
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
    await LoginPage.clickOnLoginButton();
    await ProductsPage.isPageLoaded()
    await ProductsPage.addItemToCart(3);
    await ProductsPage.navigateToShoppingCartPage();
    await ShoppingCartPage.isPageLoaded();
});

test("Continue with missing mail information", async t => {
    await CheckOutPage.isPageLoaded();
    await CheckOutPage.navigateToCheckoutPage();
    await CheckOutPage.clickOnContinueButton()
    await t.expect(CheckOutPage.firstNameErrorText.textContent).eql(dataSet.CheckOutErrorMessages.FirstNameRequired)
});

test("Validate the user navigates to the overview page once the his data has been filled", async t => {
    await CheckOutPage.navigateToCheckoutPage();
    await CheckOutPage.isPageLoaded();
    await CheckOutPage.populateMailInformation(FIRST_NAME, LAST_NAME, ZIP_CODE);
    await CheckOutPage.clickOnContinueButton();
    await CheckoutOverviewPage.isPageLoaded();
});