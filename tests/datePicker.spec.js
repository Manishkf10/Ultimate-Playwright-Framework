import test, { expect } from "@playwright/test";

test("@web date handling",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const date="18";
    const month="10";
    const year="2028";
    const expectCalender=[month,date,year]

    await page.locator(".react-date-picker__inputGroup [name='month']").click();
    await page.locator(".react-calendar__navigation__label").click();//open months
    await page.locator(".react-calendar__navigation__label").click();//open years
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    await page.locator(".react-date-picker__inputGroup input").last().waitFor();
    const count=await page.locator(".react-date-picker input[data-input='true']").count();
    for(let i=0;i<count;i++){
        console.log(await page.locator(".react-date-picker input[data-input='true']").nth(i).getAttribute("value"),expectCalender[i]);
        expect((await page.locator(".react-date-picker input[data-input='true']").nth(i).getAttribute("value"))).toEqual(expectCalender[i]);
    }

})