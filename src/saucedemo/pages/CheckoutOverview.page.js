import { Selector, t } from "testcafe";

class CheckoutOverviewPage {
    constructor(){
        this.cancelButton = Selector(".cart_cancel_link.btn_secondary");
        this.finishButton = Selector(".btn_action.cart_button");
        this.shippingSummaryDiv = Selector(".summary_info");
    }

    async isPageLoaded(){
        return await (
            this.cancelButton.exists && 
            this.finishButton.exists && 
            this.shippingSummaryDiv.exists
        )
    };
}

export default new CheckoutOverviewPage()