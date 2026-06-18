import {test,expect} from "@playwright/test";


test("screenshot of page",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("input[placeholder='Hide/Show Example']")).toBeVisible();
    await page.locator("#hide-textbox").click();
    //screenshot of current page visible
    await page.screenshot({path: "screenshots/visiblePage.png"});
    await expect(page.locator("input[placeholder='Hide/Show Example']")).toBeHidden();
    await page.locator("#show-textbox").click();
    //screenshot of locator
    await page.locator("#displayed-text").screenshot({path:"screenshots/locatorScreenShots.png"});
})


test("comparision of screenshots",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    /*
        1. In first run it failed and create a copy on screenshot
        2. create a new copy and compare pixel by pixel to already store .png file
    */
    await expect(await page.screenshot()).toMatchSnapshot("comparision.png");


})