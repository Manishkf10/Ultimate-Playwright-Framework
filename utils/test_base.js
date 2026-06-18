import {test} from "@playwright/test";

export const customTest = test.extend({
    testDataToPlaceOrder: {
        url: "https://rahulshettyacademy.com/client/#/auth/login",
        username: "anshika@gmail.com",
        password: "Iamking@000",
        myProduct: "ZARA COAT 3"
    }
})