import { expect } from "@playwright/test";

export class OrdersPage{
    constructor(page){
        this.ordersBtn=page.locator("button[routerlink='/dashboard/myorders']");
        this.ordersRow=page.locator("tr.ng-star-inserted");
        this.displayedOrder=page.locator(".col-md-6 .col-text.-main");
    }


    async confirmOrder(myOrderId){
        await this.ordersBtn.click();
        await this.ordersRow.last().waitFor();
        const totalOrder=await this.ordersRow.count();
         for(let i=0;i<totalOrder;i++){
            //console.log(await orders.nth(i).textContent());
             if((await this.ordersRow.nth(i).locator("th").textContent()).trim()===myOrderId){
                 expect(await this.ordersRow.nth(i).locator("th")).toHaveText(myOrderId);
                 await this.ordersRow.locator("button").last().waitFor();
                 await this.ordersRow.locator("button").first().click();
                 break;
             }
        }
         //await expect(this.displayedOrder).toBeVisible();
    }        
}