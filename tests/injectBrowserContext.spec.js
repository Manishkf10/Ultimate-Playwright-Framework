import{chromium, test}    from "@playwright/test";

let webContext;
test.beforeAll(async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    console.log(await page.title());
    await page.locator(".card-body").last().waitFor();//getsome time to load all property of browser

    //storing current webPage context in a file named state.json
    await context.storageState({path:"state.json"});//stors browser context, contains current cookies, local storag to file path:"state.json"
    webContext=await browser.newContext({storageState:"state.json"});//creating a browserContext with context, contains current cookies,  
    //console.log("before:", webContext);
})



test("adding product in cart",async()=>{
    let myProduct="ZARA COAT 3";
  
    const page=await webContext.newPage();//this page is not fixture, we created it
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator(".card-body").last().waitFor();//element will be load properly
        const productList=page.locator(".card-body");
        const count=await productList.count();
        for(let i=0;i<count;i++){
             
            if(await productList.nth(i).locator("b").textContent()===myProduct){
                await productList.nth(i).locator("text= Add To Cart").click();break;
                
            } 
        }

})

