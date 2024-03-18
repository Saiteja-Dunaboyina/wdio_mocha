const { $,browser,expect} = require('@wdio/globals');
const data = require("../../data/userdata.json")
class HomePage {
    async navbar() {
        for (let elementname of data.navbar) {
            await expect($(`(//a[text()='${elementname}'])[1]`)).toBeDisplayed();
        }
    }
}
module.exports = new HomePage();