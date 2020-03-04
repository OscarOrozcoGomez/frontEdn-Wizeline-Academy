import { Selector, t } from "testcafe";
import ProductsPage from "../pages/Products.page"

class ShoppingCart {
    constructor() {
        this.checkoutButton = Selector(".btn_action.checkout_button");
        this.yourCartSubHeader = Selector(".subheader");
        this.continueShoppingButton = Selector(".cart_footer>.btn_secondary");
        this.cartItems = Selector(".cart_item");
        this.cartItemsList = [];
    }

    async isPageLoaded(){
        return await (
            this.checkoutButton.exists && 
            this.yourCartSubHeader.exists && 
            this.continueShoppingButton.exists
        );
    }

    async setcartItemsList(){
        for (let index = 0; index < this.cartItems.length; index++) {
            this.cartItemsList[index] = await this.cartItems.find(".inventory_item_name").nth(index).textContent;
        }
    }

    async getcartItemsList(){
        return this.cartItemsList;
    }

}

export default new ShoppingCart();