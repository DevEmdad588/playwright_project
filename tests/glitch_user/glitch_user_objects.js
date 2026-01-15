export default class glitch_user_objects {
    constructor(page) {
        this.page = page
        this.usernameInput = this.page.locator("//input[@id='user-name']")
        this.passwordInput = this.page.locator("//input[@id='password']")
        this.loginButton = this.page.locator("//input[@id='login-button']")
        this.hamburgerMenu = this.page.locator("//button[@id='react-burger-menu-btn']")
        this.resetapp = this.page.locator("//a[@id='reset_sidebar_link']")
        this.crossButton = this.page.locator("//button[@id='react-burger-cross-btn']")

        this.cart1 = this.page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']")
        this.cart2 = this.page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']")
        this.cart3 = this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
        this.cart4 = this.page.locator( "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")

        this.cartIcon = this.page.locator(
            "//div[@id='shopping_cart_container']/a[@class='shopping_cart_link']"
        )
        this.checkoutButton = this.page.locator("//button[@id='checkout']")
        this.product1 = this.page.locator(
            "//a[@id='item_4_title_link']/div[@class='inventory_item_name']"
        )
        this.product2 = this.page.locator(
            "//a[@id='item_0_title_link']/div[@class='inventory_item_name']"
        )
        this.product3 = this.page.locator(
            "//a[@id='item_5_title_link']/div[@class='inventory_item_name']"
        )
        
        this.product4 = this.page.locator(
            "//a[@id='item_3_title_link']/div[@class='inventory_item_name']"
        )

        this.checkProduct4= this.page.locator("//div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[@class='cart_item']/div[@class='cart_item_label']")

        this.price1 = this.page.locator(
            "//div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[@class='cart_item'][1]/div[@class='cart_item_label']/div[@class='item_pricebar']/div[@class='inventory_item_price']"
        )
        this.price2 = this.page.locator(
            "//div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[@class='cart_item'][2]/div[@class='cart_item_label']/div[@class='item_pricebar']/div[@class='inventory_item_price']"
        )
        this.price3 = this.page.locator(
            "//div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[@class='cart_item'][3]/div[@class='cart_item_label']/div[@class='item_pricebar']/div[@class='inventory_item_price']"
        )
        this.price4 = this.page.locator(
            "//div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[@class='cart_item'][4]/div[@class='cart_item_label']/div[@class='item_pricebar']/div[@class='inventory_item_price']"
        )


        this.fname = this.page.locator("//input[@id='first-name']")
        this.lname = this.page.locator("//input[@id='last-name']")
        this.zipcode = this.page.locator("//input[@id='postal-code']")
        this.continueButton = this.page.locator("//input[@id='continue']")
        this.finishButton = this.page.locator("//button[@id='finish']")

        this.subtotal = this.page.locator("//div[@class='summary_subtotal_label']")
        this.tax = this.page.locator("//div[@class='summary_tax_label']")
        this.total = this.page.locator("//div[@class='summary_total_label']")

        this.logoutButton = this.page.locator("//a[@id='logout_sidebar_link']")

        this.zToA= this.page.locator("//select[@data-test='product-sort-container']/option[@value='za']")
        this.filterButton = this.page.locator(
            "//div[@id='header_container']/div[@class='header_secondary_container']/div[@class='right_component']/span[@class='select_container']"
        )
        this.orderMessage = this.page.locator("//div[@id='checkout_complete_container']/h2[@class='complete-header']")
       
    }
}
