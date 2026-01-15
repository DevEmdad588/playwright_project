import lockced_user_objects from "./locked_out_user_objects"

export default class locked_user_actions {
    constructor(page) {
        this.page = page
        this.locators = new lockced_user_objects(page)
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
    async getErrorMessage() {
        return await this.locators.errorMessage.textContent()
    }
}


