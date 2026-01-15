# playwright_project

# SauceDemo Playwright Automation Project

This repository contains automated test cases for the   # https://www.saucedemo.com/   
website using    Playwright with JavaScript (ES Modules).

The project is created as part of   # Module 17 Automation Assignment.
  
🔧 Tech Stack

-    Language:    JavaScript (ES Module)
-    Automation Tool:    Playwright
-    Test Runner:    Playwright Test
-    Reporting:    Allure Report + Playwright HTML Report
  
🧪How to run it-

-Goto terminal and write command npm run test_q1/test_q2/test_q3 to run the test cases sequentially

-Goto terminal and write command npm run test to run all the test cases

-Goto terminal and write command npm run getReport to generate the #Allure report

🧪 Test Scenarios Covered
    ✅Q1 – Locked Out User
- Login using `locked_out_user`
- Verify error message is displayed
- Ensure login is unsuccessful
    ✅ Q2 – Standard User Purchase Journey 
- Login using `standard_user`
- Reset App State
- Add three items to cart
- Verify product names and prices
- Proceed to checkout
- Verify total price
- Finish purchase
- Verify successful order message
- Reset App State again
- Logout successfully
    ✅ Q3 – Performance Glitch User 
- Login using `performance_glitch_user`
- Reset App State
- Filter products by Name (Z → A)
- Add first product to cart
- Proceed to checkout
- Verify product name and price
- Verify subtotal, tax, and total
- Finish purchase
- Verify success message
- Reset App State and logout
