import {expect } from "@playwright/test";
import {customTest} from "../utils/test_base"
import {LoginPage} from "../pageObjects/LoginPage"
import {DeshboardPage} from "../pageObjects/DeshboardPage"
import {PaymentPage} from "../pageObjects/PaymentPage"
import {CartPage} from "../pageObjects/CartPage"
import {ThankyouPage} from "../pageObjects/OrderThankyouPage"
import {OrdersPage} from "../pageObjects/OrdersPage"


customTest(`@web shopping scenation for `,async({page,testDataToPlaceOrder})=>{
    let myProduct=testDataToPlaceOrder.myProduct;
    const loginPage=new LoginPage(page);
    await page.goto(testDataToPlaceOrder.url);
    await loginPage.validLogin(testDataToPlaceOrder.username,testDataToPlaceOrder.password)

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


