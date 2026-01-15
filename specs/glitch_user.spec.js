import { expect, test } from "@playwright/test"
import glitch_user_actions from "../tests/glitch_user/glitch_user_actions"
const username = "performance_glitch_user"
const password = "secret_sauce"
test.describe("Glitch User Test Case Journey", () => {
    let login
    let context
    let page

    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext()
        page = await context.newPage()
        login = new glitch_user_actions(page)
        await page.goto("https://www.saucedemo.com/")
    })

    test("Glitch user will log in successfully and show no error message", async ({ page }) => {
        await page.pause()

        await login.enterUsername(username)
        // await page.waitForTimeout(2000)
        await login.enterPassword(password)
        // await page.waitForTimeout(2000)
        await login.clickLoginButton()
        await page.waitForTimeout(2000)
        
       

        
        await login.addToCart4()
        await page.waitForTimeout(2000)

        await login.clickCartIcon()
        await page.waitForTimeout(2000)

        await login.clickCheckoutButton()
        await page.waitForTimeout(2000)
        await login.enterFirstName("Emdad")
        await page.waitForTimeout(2000)
        await login.enterLastName("Hossain")
        await page.waitForTimeout(2000)
        await login.enterZipCode("1216")
        await page.waitForTimeout(2000)
        await login.clickContinueButton()
        await page.waitForTimeout(2000)
        /* const productName1 = await login.getProduct1Name()
        expect(productName1).toContain("Sauce Labs Backpack")
        await page.waitForTimeout(1500)
        const productPrice1 = await login.getProduct1Price()
        expect(productPrice1).toContain("$29.99")

        await page.waitForTimeout(1500)

        const productName2 = await login.getProduct2Name()
        expect(productName2).toContain("Sauce Labs Bike Light")
        await page.waitForTimeout(1500)
        const productPrice2 = await login.getProduct2Price()
        expect(productPrice2).toContain("$9.99")

        await page.waitForTimeout(2000)

        const productName3 = await login.getProduct3Name()
        expect(productName3).toContain("Sauce Labs Fleece Jacket")
        await page.waitForTimeout(2000)
        const productPrice3 = await login.getProduct3Price()
        expect(productPrice3).toContain("$49.99")
        await page.waitForTimeout(2000) */
        
        const product4 = await login.getProduct4Name()
        expect(product4).toContain("Test.allTheThings() T-Shirt (Red)")
        await page.waitForTimeout(2000)
        const productPrice4 = await login.getProduct4Price()
        expect(productPrice4).toContain("$15.99")
        await page.waitForTimeout(2000)
        const subtotalText = await login.stdSubTotal()
        expect(subtotalText).toContain("$15.99")
        
        const taxText = await login.stdTax()
        expect(taxText).toContain("$1.28")
       
        const totalText = await login.stdTotal()
        expect(totalText).toContain("$17.27")
        

        await login.clickFinishButton()
        const message = await login.orderCompleteMessage()
        expect(message).toContain("Thank you for your order!")
       


        // await page.waitForTimeout(2000)
    })

   /* test("Check product name & price", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/checkout-step-two.html")

        await login.enterUsername(username)
        // await page.waitForTimeout(2000)
        await login.enterPassword(password)
        // await page.waitForTimeout(2000)
        await login.clickLoginButton()
        await page.waitForTimeout(2000)

        await page.goto("https://www.saucedemo.com/checkout-step-two.html")

        const productName2 = await login.getProduct2Name()
        expect(productName2).toContain("Sauce Labs Bike Light")

        const productPrice2 = await login.getProduct2Price()
        expect(productPrice2).toContain("$9.99")

        const productName3 = await login.getProduct3Name()
        expect(productName3).toContain("Sauce Labs Fleece Jacket")

        const productPrice3 = await login.getProduct3Price()
        expect(productPrice3).toContain("$49.99")*/
    })


