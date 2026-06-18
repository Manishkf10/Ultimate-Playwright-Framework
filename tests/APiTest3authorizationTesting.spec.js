import {test,  expect } from "@playwright/test";

test("user authenticate but not authorized",async({page})=>{

    /*
        what we are testing-->user A can we order of userB(security testing)
        --------------------------------------------------
        1. when user A click on orders and view a perticular order
        2. we intercept that API call which fetch that product details
        3. replace it with user B fetch API call
        4. checks is order visible or not

    */

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    await page.locator(".card-body").last().waitFor();
    await page.locator("button[routerlink='/dashboard/myorders']").click();

    page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",//this url is hit normally
        route=>route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=61661f884b053f6765465b6"})//we changed above url to this one which is from other user
    )

    await page.locator("tbody tr").last().waitFor();
    await page.locator("tbody tr").first().locator("button:has-Text('View')").click();
    await expect(page.getByText('You are not authorize to view')).toBeVisible();

})