import { expect } from "@playwright/test";

export class CartPage{

    constructor(page,myProduct){
        this.product=page.locator(`h3:has-text('${myProduct}')`);
        this.checkOutBtn=page.locator(":text('Checkout')");
    }


   async validateProductInCart(myProduct){
        await expect(this.product).toHaveText(myProduct);
        await this.checkOutBtn.click();


   } 



}