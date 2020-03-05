import LoginPage from "../pages/Login.page"
import ProductsPage from "../pages/Products.page"
import ShoppingCartPage from "../pages/ShoppingCart.page"
import Helpers from "../helpers/helpers"

//Gathering variable from environment terminal
const STANDAR_USER = process.env.SAUCEDEMO_STANDAR_USER;
const PASSWORD = process.env.SAUCEDEMO_GENERAL_PASSWORD;

fixture("Shopping Page Tests").page("https://www.saucedemo.com/").beforeEach(async t => {
    await LoginPage.loginUser(STANDAR_USER, PASSWORD);
    await LoginPage.clickOnLoginButton();
    await ProductsPage.isPageLoaded()
});

test("Navigate to the shopping cart", async t => {
    await ProductsPage.navigateToShoppingCartPage();
    await ShoppingCartPage.isPageLoaded();
});

test("Add one item to the cart", async t => {
    await ProductsPage.addItemToCart(1);
    await ProductsPage.navigateToShoppingCartPage();
    await ShoppingCartPage.isPageLoaded();
    await ShoppingCartPage.setcartItemsList();
    Helpers.compareTwoLists(await ProductsPage.getLabelTextForEachInventoryItem(), await ShoppingCartPage.getcartItemsList());
});

test("Add one or more items to the cart", async t => {
    await ProductsPage.addItemToCart(6);
    await ProductsPage.navigateToShoppingCartPage();
    await ShoppingCartPage.isPageLoaded();
    await ShoppingCartPage.setcartItemsList();
    Helpers.compareTwoLists(await ProductsPage.getLabelTextForEachInventoryItem(), await ShoppingCartPage.getcartItemsList());
});