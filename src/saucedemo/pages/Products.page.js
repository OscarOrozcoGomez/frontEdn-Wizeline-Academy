import { Selector, t } from "testcafe";

class ProductsPage {
    constructor(){
        this.logoImage = Selector(".header_secondary_container>div");
        this.navBarLogo = Selector(".app_logo");
        this.hamburgerButton = Selector(".bm-burger-button>button");
    }

    async isPageLoaded(){
        return await (
            this.logoImage.exists && 
            this.navBarLogo.exists && 
            this.hamburgerButton.exists
        );
    }

}

export default new ProductsPage();