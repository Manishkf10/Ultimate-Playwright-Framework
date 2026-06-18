import { test, expect, request} from '@playwright/test';

let token;
const loginData={userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
const productData = { orders:[{country: "India",productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
let orderId;


test.beforeAll(async()=>{

    //creating login token by API Calls
    const apiContext=await request.newContext();
    const loginResponse=await apiContext.post(
                        "https://rahulshettyacademy.com/api/ecom/auth/login",
                            {
                                data:loginData
                            } 
                    )
    expect(await loginResponse.ok()).toBeTruthy();
    const loginResBody=await loginResponse.json();
    token=loginResBody.token;
    console.log("token",token);
    //create-order by API
    const orderResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
                    {
                        data:productData,
                        headers:{
                                    "Authorization":token,
                                    "Content-Type":"application/json",
                                }
                    }
                    )
    const orderResponseBody=await orderResponse.json();
    console.log("orderResponse.text",await orderResponse.text());
    expect(orderResponse.ok()).toBeTruthy();
    console.log("orderResponseBody :",orderResponseBody)
    orderId=orderResponseBody.orders[0];


})

test("login with API",async({page})=>{

    //Setting token
    await page.addInitScript(value=>{
        window.localStorage.setItem("token",value);
    },token);
    //addInitScript() injects JavaScript into the browser before the page loads
    //The value is passed as a parameter to the arrow function, and that value is provided by the calling method (addInitScript) through its second argument.


    //after Login by API adding product in cart by UI 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login/");
    await page.getByRole('button', { name: ' Add To Cart' }).first().click();
    await page.getByRole('button', { name: '   Cart' }).click();
    await expect(page.getByRole('heading', { name: 'ADIDAS ORIGINAL' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Out' }).click();

})

test("validating order placed by API",async({page})=>{
    
    //setting token
        await page.addInitScript(value=>{
        window.localStorage.setItem("token",value);
    },token);

    //Validating order
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login/");
    await page.locator("[routerlink='/dashboard/myorders']").click();
    await page.locator(".ng-star-inserted tr.ng-star-inserted").last().waitFor();
    const ordersNumber=await page.locator(".ng-star-inserted tr.ng-star-inserted").count();
    for(let i=0;i<ordersNumber;i++){
        if(await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i)===orderId)
            expect(await page.locator(".ng-star-inserted tr.ng-star-inserted").nth(i)).toBeVisible();
    }

})

