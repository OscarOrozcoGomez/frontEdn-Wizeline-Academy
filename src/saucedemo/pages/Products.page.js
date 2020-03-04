import { Selector, t } from "testcafe";
import LoginPage from "../pages/Login.page"

class ProductsPage {
    constructor(){
        this.logoImage = Selector(".header_secondary_container>div");
        this.navBarLogo = Selector(".app_logo");
        this.hamburgerButton = Selector(".bm-burger-button>button");
        this.logOutLink = Selector("#logout_sidebar_link");
        this.shoppingCart = Selector("a>svg[data-icon=shopping-cart]");
        this.invetoryItem = Selector(".inventory_item");
    }

    async isPageLoaded(){
        return await (
            this.logoImage.exists && 
            this.navBarLogo.exists && 
            this.hamburgerButton.exists
        );
    }

    async logOut(){
        await t.click(this.hamburgerButton)
        await t.expect(this.logOutLink.exists).ok()
        .click(this.logOutLink)
    }

    async navigateToShoppingCartPage(){
        await t.expect(this.shoppingCart.exists).ok();
        await t.click(this.shoppingCart);
    }

    async addItemToCart(numberOfItems){
        for (let index = 0; index < numberOfItems; index++) {
            await t.click(this.invetoryItem.find("button").nth(index)).wait(1000)
        }
    }
}

export default new ProductsPage();