import {Page,Locator} from "@playwright/test";


export class ThankyouPage{

    orderID:Locator;
    page:Page
    
    constructor(page:Page){
        this.page=page;
        this.orderID=page.locator("tbody>tr:nth-child(4) tr:nth-child(3) label");
    }

    async getOrderId(){
        const orderId=(await this.orderID.textContent())!;//! means here that it will not null
        const myOrder=(orderId.split(" "))[2];
        console.log(myOrder);
        return myOrder;
    }
}