import { Selector, t } from "testcafe";

class CheckoutOverviewPage {
    constructor(){
        this.cancelButton = Selector(".cart_cancel_link.btn_secondary");
        this.finishButton = Selector(".btn_action.cart_button");
        this.shippingSummaryDiv = Selector(".summary_info");
        this.checkoutPageItems = Selector(".cart_item");
        this.checkoutPageItemsList = [];
    }

    async isPageLoaded(){
        return await (
            this.cancelButton.exists && 
            this.finishButton.exists && 
            this.shippingSummaryDiv.exists
        )
    };

    async setCheckoutOverviewItemsList() {
        for (let index = 0; index < this.checkoutPageItems.length; index++) {
            this.checkoutPageItemsList[index] = await this.checkoutPageItems.find(".inventory_item_name").nth(index).textContent;
        }
    }

    async getCheckoutOverviewItemsList() {
        return this.checkoutPageItemsList;
    }
}

export default new CheckoutOverviewPage()