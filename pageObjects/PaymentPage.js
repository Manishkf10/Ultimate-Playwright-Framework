export class PaymentPage{
    constructor(page){
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