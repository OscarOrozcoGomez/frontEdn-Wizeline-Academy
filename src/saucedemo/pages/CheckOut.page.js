import { Selector, t } from "testcafe";
import ShoppingCart from "../pages/ShoppingCart.page"

class CheckOutPage {

    constructor() {
        this.cancelButton = Selector(".cart_cancel_link.btn_secondary");
        this.continueButton = Selector("input[value=CONTINUE]");
        this.checkOutForm = Selector(".checkout_info");
        this.firtName = Selector("#first-name");
        this.lastName = Selector("#last-name");
        this.postalCode = Selector("#postal-code");
        this.firstNameErrorText = Selector("h3[data-test*=error]");
    }

    async isPageLoaded(){
        return await (
            this.cancelButton.exists && 
            this.continueButton.exists && 
            this.checkOutForm.exists
        );
    }

    async navigateToCheckoutPage(){
        await t.expect(ShoppingCart.checkoutButton.exists).ok()
        .click(ShoppingCart.checkoutButton);
    }

    async clickOnContinueButton(){
        await t.expect(this.continueButton.exists).ok()
        .click(this.continueButton);
    }

    async populateMailInformation(firstName, lastName, zipCode){
        await t.typeText(this.firstName, firstName)
        .typeText(this.lastName, lastName)
        .typeText(this.postalCode, zipCode);
    }
}

export default new CheckOutPage();