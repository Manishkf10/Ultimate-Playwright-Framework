import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, chromium, expect, Page } from '@playwright/test';
import { POManager } from '../../pageObjectsWithType/POMannager';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 seconds


Given(
  'A valid login on {string} with {string} and {string}',
  async function (url: string, username: string, password: string) {
    console.log(url, username, password);
    await this.page.goto(url);
    await this.poManager.getLoginPage().validLogin(username, password);
});

When('Add {string} to cart', async function (product: string) {
  console.log(product);
  const deshboard = this.poManager.getDeshboard()
  await deshboard.productAddToCart(product);
});

Then('varify {string} is displayed in cart', async function (product: string) {
  console.log(product);
  const cartPage = this.poManager.getCartPage();
  await cartPage.validateProductInCart(product);
});

When('Enter valid payment details and place order', async function () {
  console.log('Place order');
  const paymentPage = this.poManager.getPaymentPage();
  await paymentPage.placeOrder();
  this.myOrderId = await this.poManager.getThankyouPage().getOrderId();
});

Then('Verify order is present in orders list', async function () {
  console.log('Verify order');
  const orderPage = this.poManager.getOrdersPage();
  await orderPage.confirmOrder(this.myOrderId);
});

  //  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //   await page.locator("#username").fill("wronge username");
  //   await page.locator("#password").fill("wronge password");
  //   await page.locator("#signInBtn").click();
  //   const erroMsg=await page.locator("[style*='block']")
  //   //console.log(erroMsg.textContent());
  //   await expect(erroMsg).toContainText("Incorrect");


Given('user try login on {string} with invalid username {string} and invalid password {string}', async function (url, username, password) {
  console.log(url,username) 
  await this.page.goto(url);
    await this.page.locator("#username").fill(username);
    await this.page.locator("#password").fill(password);
    await this.page.locator("#signInBtn").click();
});

Then('error message is displayed', async function () {
    const erroMsg=this.page.locator("[style*='block']")
    console.log("erroMsg displayed :",await erroMsg.textContent());
    await expect(erroMsg).toContainText("Incorrect");
});
