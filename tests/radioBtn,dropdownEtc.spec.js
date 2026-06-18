import test, { expect } from "@playwright/test";

test.describe.configure({mode:"parallel"});
test("dropdown",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown=page.locator("select.form-control");
    await dropdown.selectOption("consult");//read value attribute
})

test("checkbox",async({page})=>{
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     //checkbox
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();

})

test("radioBtn",async({page})=>{
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         
    await page.locator("span.checkmark").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator("span.checkmark").last()).toBeChecked();

})

test("element is unchecked",async({page})=>{
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const status=await page.locator("span.checkmark").last().isChecked();//return true or false
    expect(status).toBeFalsy();

})

test("specific attribute",async({page})=>{
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkEle=await page.locator(".float-right a").first();
    await expect(blinkEle).toHaveAttribute("class","blinkingText");

})