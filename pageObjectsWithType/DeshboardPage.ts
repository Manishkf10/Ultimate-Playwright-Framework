import { expect,Locator, Page } from "@playwright/test";

export class DeshboardPage{

    productList:Locator
    cart:Locator
    page:Page;

    constructor(page:Page){
        this.page=page;
        this.productList=page.locator(".card-body");
        this.cart=page.locator("[routerlink*='dashboard/cart']");
    }

    async productAddToCart(myProduct:string){
        await this.productList.last().waitFor();
        const count=await this.productList.count();
        console.log("count:",count);
        
        for(let i=0;i<count;i++){
         
            console.log(await this.productList.nth(i).locator("b").textContent(),"myProduct :",myProduct);
             if(await this.productList.nth(i).locator("b").textContent()===myProduct){
                 await this.productList.nth(i).getByRole("button", { name: " Add To Cart" }).click();break;

            } 
        }
        await this.cart.click();
    }
}
    
