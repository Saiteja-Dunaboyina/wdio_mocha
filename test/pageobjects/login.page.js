
class LoginPage {

    locators = {
        loginButton : "//a[text()='Log in']",
        emailInput : "//input[@id='Email']",
        passwordInput : "//input[@id='Password']",
        submitButton : "//button[text()='Log in']",
        logoutButton : "//a[text()='Log out']"
    }

    get loginButtonElement() {
        return $(this.locators.loginButton);
    }

    get emailInputElement() {
        return $(this.locators.emailInput);
    }

    get passwordInputElement() {
        return $(this.locators.passwordInput);
    }

    get submitButtonElement() {
        return $(this.locators.submitButton);
    }

    get logoutButtonElement() {
        return $(this.locators.logoutButton);
    }

    async login(mail,password) {
        await this.loginButtonElement.click();
        await this.emailInputElement.setValue(mail);
        await this.passwordInputElement.setValue(password);
        await this.submitButtonElement.click();
    }

    async logout() {
        await this.logoutButtonElement.click();
    }
}
module.exports = new LoginPage();
