import { test, expect } from '@playwright/test';

test("getByLabel()",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Password").fill("manish");
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");

    //validating element is checked
    await expect(await page.getByLabel("Employed").isChecked).toBeTruthy();
    //validating element is unchecked
    await expect(await page.getByLabel("Student").isChecked()).toBeFalsy();

})

test("getByRole()",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByRole("button",{name:"Submit"}).click();
    await page.getByRole("combobox",{name:"Gender"}).selectOption("Female");
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link",{name:"Shop"}).click();
    

})