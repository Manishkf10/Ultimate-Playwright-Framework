import { chromium, Browser } from "@playwright/test";
import { After, AfterStep, Before, BeforeStep, Status } from "@cucumber/cucumber";
import { POManager } from '../../pageObjectsWithType/POMannager';
import path from "node:path";

Before(async function(){
    console.log("test started")
    this.browser = await chromium.launch({
          headless:true,
    });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep(function(){
    console.log("BeforeStep");
})

AfterStep(async function({result}){
    if(result.status===Status.FAILED){
        await this.page.screenshot({path:"screenshots/cucumberTest.png"});
    }
})

After(async function(){
    await this.browser.close();
    console.log("Test Execution is completed");
    
})