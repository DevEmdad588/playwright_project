import standard_user_objects from "./standard_user_objects"

export default class standard_user_actions {
    constructor(page) {
        this.page = page
        this.locators = new standard_user_objects(page)
    }
    async enterUsername(username) {
        await this.locators.usernameInput.fill(username)
    }
    async enterPassword(password) {
        await this.locators.passwordInput.type(password)
    }
    async clickLoginButton() {
        await this.locators.loginButton.click()
    }

    async clickHamburgerMenu() {
        await this.locators.hamburgerMenu.click()
    }
    async clickResetApp() {
        await this.locators.resetapp.click()
    }
    async clickCrossButton() {
        await this.locators.crossButton.click()
    }
    async addToCart1() {
        await this.locators.cart1.click()
    }
    async addToCart2() {
        await this.locators.cart2.click()
    }
    async addToCart3() {
        await this.locators.cart3.click()
    }
    async clickCartIcon() {
        await this.locators.cartIcon.click()
    }
    async clickCheckoutButton() {
        await this.locators.checkoutButton.click()
    }
    async getProduct1Name() {
        return await this.locators.product1.textContent()
    }
    async getProduct2Name() {
        return await this.locators.product2.textContent()
    }
    async getProduct3Name() {
        return await this.locators.product3.textContent()
    }
    async getProduct1Price() {
        return await this.locators.price1.textContent()
    }
    async getProduct2Price() {
        return await this.locators.price2.textContent()
    }
    async getProduct3Price() {
        return await this.locators.price3.textContent()
    }
    async enterFirstName(firstname) {
        await this.locators.fname.fill(firstname)
    }
    async enterLastName(lastname) {
        await this.locators.lname.fill(lastname)
    }
    async enterZipCode(zipcode) {
        await this.locators.zipcode.fill(zipcode)
    }
    async clickContinueButton() {
        await this.locators.continueButton.click()
    }
    async clickFinishButton() {
        await this.locators.finishButton.click()
    }
    async stdSubTotal() {
        return await this.locators.subtotal.textContent()
    }
    async stdTax() {
        return await this.locators.tax.textContent()
    }
    async stdTotal() {
        return await this.locators.total.textContent()
    }
    async clickLogoutButton() {
        await this.locators.logoutButton.click()
    }
}
