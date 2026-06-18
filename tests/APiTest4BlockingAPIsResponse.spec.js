import test, { request } from "@playwright/test";


test("blocking css file response", async ({ page }) => {
    //blocking css file calling of api
    //its like a condition that when a api url is matched call this method which abort request
    await page.route("**/*.css", route => route.abort())//blocks every time a matching request

    //blocking image file calling of api
    await page.route("**/*.{png,jpg,jpeg}", route => route.abort())//blocks every time a matching request

    //can print all types of api-calls
    page.on("request",request=>console.log("REQUEST APIs:",request.url()))
    page.on("response",response=>console.log("RESPONSE APIs:",response.url(),response.status()));


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    const ele = page.locator(".card-title a").nth(0); 
    console.log("nth element", await ele.textContent());
    console.log("first element", await page.locator(".card-title a").first().textContent());
    console.log("All element", await page.locator(".card-title a").allTextContents());


})