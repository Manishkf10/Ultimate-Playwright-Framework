import {test} from "@playwright/test";

interface TestDataForOrder{
     url: string;
     username: string;
     password: string;
     myProduct: string;
}

export const customTest=test.extend<{testDataToPlaceOrder:TestDataForOrder}>(
    {
        testDataToPlaceOrder:{
            url: "https://rahulshettyacademy.com/client/#/auth/login",
            username: "anshika@gmail.com",
            password: "Iamking@000",
            myProduct: "ZARA COAT 3"
        }
    }
)
