import { expect } from "@playwright/test";

export class APIUtils{

    constructor(apiContext,loginData){
        this.apiContext=apiContext;
        this.loginData=loginData;
    }

    async getToken() {
        const loginResponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
                                    {
                                        data:this.loginData
                                    } 
                            )
            expect(await loginResponse.ok()).toBeTruthy();
            const loginResBody=await loginResponse.json();
            const token=loginResBody.token;
            return token;
    }

    async createOrder(productData){
        const myResponse={};
        myResponse.token=await this.getToken();
         const orderResponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
                            {
                                data:productData,
                                headers:{
                                            "Authorization":myResponse.token,
                                            "Content-Type":"application/json",
                                        }
                            }
                            )
            const orderResponseBody=await orderResponse.json();
            expect(orderResponse.ok()).toBeTruthy();
            myResponse.orderId = orderResponseBody.orders[0];
            console.log("orderResponseBody :",orderResponseBody)
      
            return myResponse;
    }
}