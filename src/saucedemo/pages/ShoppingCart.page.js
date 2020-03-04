import { Selector, t } from "testcafe";

class ShoppingCart {
    constructor() {
        this.checkoutButton = Selector(".btn_action.checkout_button");
        this.yourCartSubHeader = Selector(".subheader");
        this.continueShoppingButton = Selector(".cart_footer>.btn_secondary");
    }

    async isPageLoaded(){
        return await (
            this.checkoutButton.exists && 
            this.yourCartSubHeader.exists && 
            this.continueShoppingButton.exists
        );
    }
}

export default new ShoppingCart();