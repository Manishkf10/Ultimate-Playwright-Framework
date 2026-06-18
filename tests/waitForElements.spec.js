import { test, expect } from '@playwright/test';


test("allTextContents() working",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();

    console.log("All element",await page.locator(".card-title a").allTextContents());//unable to getElement as playwright understand that it return a array but not know that array dont have element, so its not wait here

    //option to control this empty array
    //await page.waitForLoadState("load");//not working properlly so discourage it
    await page.locator(".card-title a").last().waitFor();//getting the last element so that it auto wait
    console.log("waitForLoadState('domcontentloaded')->",await page.locator(".card-title a").allTextContents());


    
})