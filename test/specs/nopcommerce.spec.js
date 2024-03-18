const { expect,browser } = require('@wdio/globals')
const expectChai = require('chai').expect;
require('dotenv').config();
const allure = require('@wdio/allure-reporter').default;
const data = require("../../data/userdata.json")
const indexPage = require("../pageobjects/index.page")

describe("Nopcommerce Application" , () => {
    beforeEach("Launch url" , async () => {
        allure.addStep("launch the web application in the browser")
            await indexPage.LaunchURL.launchBrowser();
            await browser.maximizeWindow();
    })

    it.skip("user registration test",async () => {
        allure.addStep("Registration with user data")
            await indexPage.RegistrationPage.userRegistration(data.firstname,data.lastname,data.date,data.month,data.year,data.mail,data.companyName,data.password);
    })

    it("login with valid credentials" , async () => {
        allure.addStep("Login with valid username and password")
            await indexPage.LoginPage.login(process.env.validuser,process.env.validpassword);
        allure.addStep("checking the logout is visible or not")
            await expect(indexPage.LoginPage.logoutButtonElement).toBeDisplayed();
            expectChai(await indexPage.LoginPage.logoutButtonElement.isDisplayed()).to.be.true;
        allure.addStep("logout from the application")
            await indexPage.LoginPage.logout();
        
    })

    it("Home page nav bar testing",async () => {
        allure.addStep("Login with valid username and password")
            await indexPage.LoginPage.login(process.env.validuser,process.env.validpassword);
        allure.addStep("checking the logout is visible or not")
            await expect(indexPage.LoginPage.logoutButtonElement).toBeDisplayed();
            expectChai(await indexPage.LoginPage.logoutButtonElement.isDisplayed()).to.be.true;
        allure.addStep("checking the element present in nav bar or not")
            await indexPage.HomePage.navbar();
        allure.addStep("logout from the application")
            await indexPage.LoginPage.logout();
    })

    it("Checking the item is added to the cart or not",async () =>{
        allure.addStep("Login with valid username and password")
            await indexPage.LoginPage.login(process.env.validuser,process.env.validpassword);
        allure.addStep("checking the logout is visible or not")
            await expect(indexPage.LoginPage.logoutButtonElement).toBeDisplayed();
            expectChai(await indexPage.LoginPage.logoutButtonElement.isDisplayed()).to.be.true;
        allure.addStep("Add the item to the cart");
            await indexPage.ComputerPage.addToCart(data.country,data.pincode);
        allure.addStep("logout from the application")
            await indexPage.LoginPage.logout();
    })


})