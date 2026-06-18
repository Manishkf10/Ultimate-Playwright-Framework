const {test, expect, chromium}=require("@playwright/test");

//how a browser is openning
test("how a test() runs",async()=>{
    const browser=await chromium.launch();// Launches a new Chromium browser instance
    const context= await browser.newContext();// Creates a new isolated browser context (similar to an Incognito session)
    const page=await context.newPage();// Opens a new browser tab/page within the context
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");// Navigates the page to the specified URL
    await browser.close();// Closes the browser and all associated contexts/pages 

});


//passing page as fixture may skip all above steps
test("page context",async({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

});