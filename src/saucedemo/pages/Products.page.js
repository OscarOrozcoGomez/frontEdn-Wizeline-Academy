import { Selector, t } from "testcafe";
import LoginPage from "../pages/Login.page"

class ProductsPage {
    constructor(){
        this.logoImage = Selector(".header_secondary_container>div");
        this.navBarLogo = Selector(".app_logo");
        this.hamburgerButton = Selector(".bm-burger-button>button");
        this.logOutLink = Selector("#logout_sidebar_link");
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

}

export default new ProductsPage();