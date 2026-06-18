import test, { expect } from "@playwright/test";




test("@web switching b/w windows",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const [newPage]=await Promise.all(  //return arrays of promises[newpage,clickResult]->second have no use as its void type of promise
        [
            context.waitForEvent("page"),//waitForEvent is event listener and wait for that perticular event done and return promise of new page 
            page.locator(".float-right a").first().click()//return promise of void
        ]
    )
    console.log("parent page:->",await page.title());
    console.log("child page:->",await newPage.title())
    const msg=await newPage.locator("p.red").textContent();
    console.log(msg);
    const arrayText=msg.split("@")
    console.log(arrayText);
    const userMail=(arrayText[1].split(" "))[0];
    console.log("userMail",userMail);
    await page.locator("#username").fill(userMail);//if you want to catch your entered text from DOM use .inputText()
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");



})