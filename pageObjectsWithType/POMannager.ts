import {LoginPage} from "./LoginPage";
import {CartPage} from "./CartPage";
import {DeshboardPage} from "./DeshboardPage";
import {OrdersPage} from "./OrdersPage";
import {ThankyouPage} from "./OrderThankyouPage";
import {PaymentPage} from "./PaymentPage";
import {Page} from "@playwright/test";

export class POManager{

    loginPage:LoginPage;
    cartPage:CartPage;
    deshboardPage:DeshboardPage;
    ordersPage:OrdersPage;
    thankyouPage:ThankyouPage;
    paymentPage:PaymentPage;
    page:Page;
    

    constructor(page:any){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.cartPage=new CartPage(this.page);
        this.deshboardPage=new DeshboardPage(this.page);
        this.ordersPage=new OrdersPage(this.page);
        this.thankyouPage=new ThankyouPage(this.page);
        this.paymentPage=new PaymentPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getDeshboard(){
        return this.deshboardPage;
    }
    getOrdersPage(){
        return this.ordersPage;
    }
    getThankyouPage(){
        return this.thankyouPage;
    }
    getPaymentPage(){
        return this.paymentPage;
    }

}