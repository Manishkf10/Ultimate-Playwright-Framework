const { test } = require("@playwright/test");

test("popUp Validation",async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
    await page.on("dialog",dialog => dialog.accept());//when ever during this test execution a javascript pop-up displayed is handled it
                                                    //dialog => dialog.accept() is equal to (dialog)=>{dialog.accept()} same arrow funtion with single parameter and execution line
                                                    //dialog => dialog.dismiss() 
    await page.locator("#confirmbtn").click();

})

test("frame Handling",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    console.log(await page.title());
    const childFrame=await page.frameLocator("#courses-iframe");
    //await childFrame.locator(".current a").last().waitFor();
    console.log("child frame : ",await childFrame.locator(".subscribe-style-one .auto-container h2").first().textContent());
})