import {expect } from "@playwright/test";
import {customTest} from "../utils/test_baseWithType"
import {POManager} from "../pageObjectsWithType/POMannager";


customTest(`@web shopping scenation for `,async({page,testDataToPlaceOrder})=>{
    let myProduct=testDataToPlaceOrder.myProduct;

    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    await page.goto(testDataToPlaceOrder.url);
    await loginPage.validLogin(testDataToPlaceOrder.username,testDataToPlaceOrder.password)

    const deshboard=poManager.getDeshboard()
    await deshboard.productAddToCart(myProduct);

    const cartPage=poManager.getCartPage();
    await cartPage.validateProductInCart(myProduct);

    const paymentPage=poManager.getPaymentPage();
    await paymentPage.placeOrder();

    const myOrderId=await poManager.getThankyouPage().getOrderId();

    const orderPage=poManager.getOrdersPage();
    await orderPage.confirmOrder(myOrderId);
})


