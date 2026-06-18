import test, { expect } from "@playwright/test";


test("end to end shopping scenation validation",async({page})=>{
    let myProduct="ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    console.log(await page.title());
    await page.locator(".card-body").last().waitFor();//element will be load properly
    const productList=page.locator(".card-body");
    const count=await productList.count();
    for(let i=0;i<count;i++){
         
        if(await productList.nth(i).locator("b").textContent()===myProduct){
            await productList.nth(i).locator("text= Add To Cart").click();break;
            
        } 
    }
    await page.locator("[routerlink*='dashboard/cart']").click();
    await expect(page.locator("h3:has-text('zara coat 3')")).toHaveText(myProduct);
    await page.locator(":text('Checkout')").click();
   
    await page.locator(".field.small input").first().fill("abc");
    await page.locator(".field.small input").last().fill("123");
    await page.locator("input[placeholder='Select Country']").pressSequentially("ind",{delay:250});
    await page.locator(".form-group button").last().waitFor();
    const countries=page.locator(".form-group button");
    const countryCount=await countries.count();
    console.log(countryCount);
    for(let i=0;i<count;i++){
        console.log(await countries.nth(i).textContent());
        if(await countries.nth(i).textContent()===" India"){
            countries.nth(i).click();break;
        }
    }
    await page.locator(".actions a").click();
    const orderId=await page.locator("tbody>tr:nth-child(4) tr:nth-child(3) label").textContent();
    const myOrder=(orderId.split(" "))[2];
    console.log(myOrder);
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.locator("tr.ng-star-inserted").last().waitFor();
    const ordersRow=page.locator("tr.ng-star-inserted");
    const totalOrder=await ordersRow.count();
    for(let i=0;i<totalOrder;i++){
        //console.log(await orders.nth(i).textContent());
         if((await ordersRow.nth(i).locator("th").textContent()).trim()===myOrder){
             expect(await ordersRow.nth(i).locator("th")).toHaveText(myOrder);
             await ordersRow.locator("button").last().waitFor();
             await ordersRow.locator("button").first().click();
             break;
         }
    }
    await expect(page.locator(".col-md-6 .col-text.-main")).toBeVisible();
    
   

})