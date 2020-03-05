import { Selector, t } from "testcafe";

class FinishPage {
    constructor() {
        this.thanyouH2Header = Selector(".checkout_complete_container>h2");
        this.yourOrderDispached = Selector(".complete-text");
        this.ponyImage = Selector(".pony_express");
    }

    async isPageLoaded() {
        return await (
            this.thanyouH2Header.exists &&
            this.yourOrderDispached.exists &&
            this.ponyImage.exists
        )
    };
}
export default new FinishPage();