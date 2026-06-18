import{chromium, test,expect}    from "@playwright/test";


let webContext;
const fakeEmptyPayload={date:[],message:"No Orders"};//found in resposne this when no order in orders

test.beforeAll(async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    console.log(await page.title());
    await page.locator(".card-body").last().waitFor();
    await context.storageState({path:"state.json"});
    webContext=await browser.newContext({storageState:"state.json"}); 
})



test("modifing server API response",async()=>{
    /*
    what we are doning: 1. we want to display no product in orders.
                        2. but there is always some order available in orders
                        3. we intercept API response of server which have order.
                        4. modify it with fake data
                        5. pass then to browser to display it
                        6. then validate "no order msg"

    */

    const page=await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator(".card-body").last().waitFor();

    //before clicking the orders we prepair to intercept response
    //page.route() is used to intercept network requests/response
    //Browser ---> Playwright(Route Handler) ---> Server and wise-versa

    await page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",      //* for customerId
        async route=>{
            // Fetch the original server response before modifying it
            const response=await page.request.fetch(route.request());//returns the intercepted request object.
            let body=JSON.stringify(fakeEmptyPayload);
            await route.fulfill(      //add those parameter of response we want to modify
                {
                    response,//response here is orignal
                    body,//but body is changed by us
                }
            );
        }
    )
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    await expect(page.getByText('You have No Orders to show at')).toBeVisible(); 
})



