import test, { expect } from "@playwright/test";

test("error message display",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("wronge username");
    await page.locator("#password").fill("wronge password");
    await page.locator("#signInBtn").click();
    const erroMsg=await page.locator("[style*='block']")
    //console.log(erroMsg.textContent());
    await expect(erroMsg).toContainText("Incorrect");
})

