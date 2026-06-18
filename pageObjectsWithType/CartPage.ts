import { expect,Locator, Page } from "@playwright/test";

export class CartPage{

    checkOutBtn:Locator;
    page:Page;

    constructor(page:Page){
        this.page=page;
       this.checkOutBtn=page.locator(":text('Checkout')");
    }


   async validateProductInCart(myProduct:string){
         let product=this.page.locator(`h3:has-text('${myProduct}')`);
          await expect(product).toBeVisible({ timeout: 40000 });
        await expect(product).toHaveText(myProduct);
        await this.checkOutBtn.click();
 

   } 



}