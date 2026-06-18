import test from "@playwright/test";


test("valid login test",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    const ele=page.locator(".card-title a").nth(0); //if multiple element then select 0,1st,2nd..   
    console.log("nth element",await ele.textContent());
    console.log("first element",await page.locator(".card-title a").first().textContent());
    console.log("All element",await page.locator(".card-title a").allTextContents());

})