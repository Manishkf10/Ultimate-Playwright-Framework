export class ThankyouPage{
    constructor(page){
        this.orderID=page.locator("tbody>tr:nth-child(4) tr:nth-child(3) label");
    }

    async getOrderId(){
        const orderId=await this.orderID.textContent();
        const myOrder=(orderId.split(" "))[2];
        console.log(myOrder);
        return myOrder;
    }
}