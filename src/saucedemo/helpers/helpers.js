import { Selector, t } from "testcafe";

class Helpers {
    async compareTwoLists(listOne, ListTwo){
        listOne.forEach(function (listOneItem, index) {
            t.expect(listOneItem === ListTwo[index])
        })
    };
}
export default new Helpers();