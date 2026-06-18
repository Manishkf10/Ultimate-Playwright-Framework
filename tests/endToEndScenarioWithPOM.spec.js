import {test,  expect } from "@playwright/test";
import {LoginPage} from "../pageObjects/LoginPage"
import {DeshboardPage} from "../pageObjects/DeshboardPage"
import {PaymentPage} from "../pageObjects/PaymentPage"
import {CartPage} from "../pageObjects/CartPage"
import {ThankyouPage} from "../pageObjects/OrderThankyouPage"
import {OrdersPage} from "../pageObjects/OrdersPage"
import credentialsSet from "../utils/loginDataForEndToEndScenarioWithPOM.json" with { type: "json" };

for(const credentials of credentialsSet){//credentialsSet return set of data and under for loop this test is run for each set

    test(`shopping scenation for ${credentials.myProduct}`,async({page})=>{
    let myProduct=credentials.myProduct;
    const loginPage=new LoginPage(page);
    await page.goto(credentials.url);
    await loginPage.validLogin(credentials.username,credentials.password)

    const deshboard=new DeshboardPage(page);
    await deshboard.productAddToCart(myProduct);

    const cartPage=new CartPage(page,myProduct);
    cartPage.validateProductInCart(myProduct);

    const paymentPage=new PaymentPage(page);
    await paymentPage.placeOrder();

    const myOrderId=await new ThankyouPage(page).getOrderId();

    const orderPage=new OrdersPage(page);
    orderPage.confirmOrder(myOrderId);
})
}

