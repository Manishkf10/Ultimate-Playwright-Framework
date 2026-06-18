import {test,  request, expect } from "@playwright/test";
import { APIUtils } from "../utils/apiUtils";

const loginData={userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
const productInfo={orders: [{country: "Bahamas", productOrderedId: "6960ea76c941646b7a8b3dd5"}]}
let token;
let orderId;

test.beforeAll(async()=>{
    const myContent=await request.newContext();
    const apiUtil=new APIUtils(myContent,loginData);
    const response=await apiUtil.createOrder(productInfo);
    token=response.token;
    orderId=response.orderId;
})

test("validating api working",async({page})=>{
    
    page.addInitScript(value=>{
        window.localStorage.setItem("token",value);
    },token);
    console.log("done");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login/");
    await page.locator("[routerlink='/dashboard/myorders']").click();
    await page.locator(".ng-star-inserted tr.ng-star-inserted").last().waitFor();
    const ordersNumber=await page.locator(".ng-star-inserted tr.ng-star-inserted").count();
    for(let i=0;i<ordersNumber;i++){
        if(await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i)===orderId)
            expect(await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i)).toBeVisible();
            await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i).locator("button").last().waitFor();
            await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i).locator("button").last().click();
            //expect(await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i).isVisible()).toBeFalsy();
            await page.reload();
            await expect(await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i)).not.toBeVisible();
            break;
    } 
        
})


