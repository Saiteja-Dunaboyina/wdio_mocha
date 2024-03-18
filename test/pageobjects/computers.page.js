const { browser } =  require('@wdio/globals')
require('dotenv').config();
class ComputersPage {

    locators = {
        computersButton : "(//a[text()='Computers '])[3]",
        desktopButton : "(//a[text()='Desktops '])[3]",
        addtocartButton : "(//button[text()='Add to cart'])[3]",
        shopcartButton : "//span[text()='Shopping cart']",
        estimatedshippingButton : "//a[@id='open-estimate-shipping-popup']",
        selectcountryDropdown  : "//select[@id='CountryId']",
        postalcodeInput : "//input[@id='ZipPostalCode']",
        applyButton : "//button[text()='Apply']",
        continueshoppingButton : "//button[@name='continueshopping']"
    }

    get computersButtonElement() {
        return $(this.locators.computersButton);
    }

    get desktopButtonElement() {
        return $(this.locators.desktopButton);
    }

    get addtocartButtonElement() {
        return $(this.locators.addtocartButton);
    }

    get shopcartButtonElement() {
        return $(this.locators.shopcartButton);
    }

    get estimatedshippingButtonElement() {
        return $(this.locators.estimatedshippingButton);
    }

    get selectcountryDropdownElement() {
        return $(this.locators.selectcountryDropdown);
    }

    get postalcodeInputElement() {
        return $(this.locators.postalcodeInput);
    }

    get applyButtonElement() {
        return $(this.locators.applyButton);
    }

    get continueshoppingButtonElement() {
        return $(this.locators.continueshoppingButton);
    }

    async addToCart(country,postalcode) {
        await this.computersButtonElement.click();
        await this.desktopButtonElement.click();
        await this.addtocartButtonElement.click();
        await browser.pause(process.env.large_wait);
        await this.shopcartButtonElement.click();
        await this.estimatedshippingButtonElement.click();
        await this.selectcountryDropdownElement.selectByVisibleText(country);
        await this.postalcodeInputElement.setValue(postalcode)
        await browser.pause(process.env.large_wait)
        await this.applyButtonElement.click();
        await browser.pause(process.env.large_wait)
        await this.continueshoppingButtonElement.click();
    }

}
module.exports = new ComputersPage();