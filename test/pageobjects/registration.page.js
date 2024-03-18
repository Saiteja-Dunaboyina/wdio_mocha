const allureCommandline = require("allure-commandline");

class ResgistrationPage {
    locators = {
        registerButton : "//a[text()='Register']",
        selectGender : "//input[@id='gender-male']",
        firstnameInput : "//input[@id='FirstName']",
        lastnameInput : "//input[@id='LastName']",
        dayDropdown : "//select[@name='DateOfBirthDay']",
        monthDropdown : "//select[@name='DateOfBirthMonth']",
        yearDropdown : "//select[@name='DateOfBirthYear']",
        mailInput : "//input[@id='Email']",
        companyInput : "//input[@id='Company']",
        passwordInput : "//input[@id='Password']",
        confirmPasswordInput : "//input[@id='ConfirmPassword']",
        submitButton : "//button[@id='register-button']",
        continueButton : "//a[text()='Continue']"
    }

    get registerButtonElement() {
        return $(this.locators.registerButton);
    }

    get selectGenderElement() {
        return $(this.locators.selectGender);
    }

    get firstnameInputElement() {
        return $(this.locators.firstnameInput);
    }

    get lastnameInputElement() {
        return $(this.locators.lastnameInput);
    }

    get dayDropdownElement() {
        return $(this.locators.dayDropdown);
    }

    get monthDropdownElement() {
        return $(this.locators.monthDropdown);
    }

    get yearDropdownElement() {
        return $(this.locators.yearDropdown);
    }

    get mailInputElement() {
        return $(this.locators.mailInput);
    }

    get companyInputElement() {
        return $(this.locators.companyInput);
    }

    get passwordInputElement() {
        return $(this.locators.passwordInput);
    }

    get confirmPasswordInputElement() {
        return $(this.locators.confirmPasswordInput);
    }

    get submitButtonElement() {
        return $(this.locators.submitButton);
    }

    get continueButtonElement() {
        return $(this.locators.continueButton);
    }

    async userRegistration(firstname,lastname,date,month,year,mail,companyName,password) {
        await this.registerButtonElement.click();
        await this.selectGenderElement.click();
        await this.firstnameInputElement.setValue(firstname);
        await this.lastnameInputElement.setValue(lastname);
        await this.dayDropdownElement.click();
        await this.dayDropdownElement.selectByVisibleText(date);
        await this.monthDropdownElement.click();
        await this.monthDropdownElement.selectByVisibleText(month);
        await this.yearDropdownElement.click();
        await this.yearDropdownElement.selectByVisibleText(year);
        await this.mailInputElement.setValue(mail);
        await this.companyInputElement.setValue(companyName);
        await this.passwordInputElement.setValue(password);
        await this.confirmPasswordInputElement.setValue(password);
        await this.submitButtonElement.click();
        await this.continueButtonElement.click();
    }
}
module.exports =new  ResgistrationPage();