export default class locked_user_objects { 
    constructor(page) {
        this.page = page
        this.usernameInput = this.page.locator("//input[@id='user-name']")
        this.passwordInput = this.page.locator("//input[@id='password']")
        this.loginButton = this.page.locator("//input[@id='login-button']")
        this.errorMessage = this.page.locator('[data-test="error"]')
    }
}
