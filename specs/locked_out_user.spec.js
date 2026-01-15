import {test,expect} from "@playwright/test"
import locked_user_actions from "../tests/locked_out_user/locked_out_user_actions"
const username = "locked_out_user"
const password  ="secret_sauce"
test.describe("Locked Out User Test Case Journey", () => {
    let login;
    let context;
    let page;

    
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext()
        page = await context.newPage()
        login = new locked_user_actions(page)
        await page.goto("https://www.saucedemo.com/")
 });

    test("Locked Out User log in is unsuccessful and shows error message", async ({ page }) => {
        await page.pause()
       
        await login.enterUsername(username)
        await page.waitForTimeout(2000)
        await login.enterPassword(password)
        await page.waitForTimeout(2000)
        await login.clickLoginButton()
        await page.waitForTimeout(2000)
        const errorText = await login.getErrorMessage()
        expect(errorText).toContain("Epic sadface: Sorry, this user has been locked out.")
        
    });
});


