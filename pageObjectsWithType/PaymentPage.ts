import {Page,Locator} from "@playwright/test";



export class PaymentPage{

    page:Page;
    enterCountry:Locator;
    selectCountry:Locator;
    placeOrderBtn:Locator;
    
    constructor(page:Page){
        this.page=page;
        this.enterCountry=page.locator("input[placeholder='Select Country']");
        this.selectCountry=page.locator(".form-group button");
        this.placeOrderBtn=page.locator(".actions a");
    }

    async placeOrder(){
        await this.enterCountry.pressSequentially("ind",{delay:250});
        await this.selectCountry.last().waitFor();
        const countryCount=await this.selectCountry.count();
        console.log(countryCount);
    for(let i=0;i<countryCount;i++){
        console.log(await this.selectCountry.nth(i).textContent());
        if(await this.selectCountry.nth(i).textContent()===" India"){
            await this.selectCountry.nth(i).click();break;
        }
    }
    await this.placeOrderBtn.click();
    }
}