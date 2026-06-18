                        Playwright Quick Notes
                        ======================


## Playwright Commands
Create Project--->          npm init playwright@latest-->in that folder on cmd
Run Tests--->               npx playwright test
Run Specific File-->        playwright test tests/login.spec.js
Run in Headed Mode-->       npx playwright test --headed
Open UI Mode-->             npx playwright test --ui
Tests Matching Title-->     npx playwright test --grep "login"
Debug Mode-->               npx playwright test --debug
Generate Code-->            npx playwright codegen https://example.com
Show HTML Report-->         npx playwright show-report

                        Locator Basics
                        ==============

## CSS Selectors
page.locator(".card")
page.locator("#username")
page.locator(".class1.class2")-->   <div class="class1 class2"></div>
page.locator(".parent .child")-->   Finds child inside parent.
page.locator(".card h3")-->         Find h3 inside card.
page.locator(".parent > .child")--> Only direct child.
page.locator("[type='button']")-->  Attribute Locator
page.locator("[type='button']:visible")-->  neglect hidden element and only select visible one
locator.first()-->                  First Element
locator.last()-->                   Last Element
locator.nth(2)-->                   nth Element
await locator.count()-->            Count Elements
await locator.allTextContents()-->  Get All Text->return array of string
await locator.textContent()-->      Text Content


# Pseudo Locators
page.locator("h3:has-text('Zara Coat 3')")-->       Text Locator
page.locator(".card")
    .filter({ hasText: "Zara Coat 3" })-->          Filter
page.locator(".card", {
    has: page.locator("button")})-->                Has Locator

page.getByText("Submit")-->                         By Text
page.getByRole("button", { name: "Submit" })-->     By Role
page.getByLabel("Email")-->                         By Label
page.getByPlaceholder("Enter Email")-->             By Placeholder
page.getByAltText("Company Logo")-->                Alt Text
page.getByTitle("Close")-->                         By Title
page.getByTestId("login-btn")-->                    By Test Id


# Assertions
await expect(locator).toBeVisible()-->              Visible
await expect(locator).toBeHidden()-->               Hidden
await expect(locator).toHaveText("Success")-->      Text Validation
await expect(locator).toContainText("Success")-->   Partial Text
await expect(locator).toHaveCount(3)-->             Count Validation
await expect(locator)
    .toHaveAttribute("type","button")-->            Attribute Validation


## How to debug API request
1. add test run command under package.json file and in "scripts": {npx playwright test testName.spec.json}.
2. mark debug point on script. 
3. press ctrl+p and give ">debug npm script"
4. use debug control board
5. recomandation: during debuging time consider as normal test so exceed your timeout first by config.js


## import-export understanding


Named Export:
------------    export class LoginPage {}
                import { LoginPage } from "./utils.js"; here same name "LoginPage" should available in utils.js

                to customize name we do
                import { LoginPage as A} from "./utils.js" here A represent LoginPage


Default Export:
---------------     export default LoginPage{};
                    import A from "./utils.js";
                    1. a utils.js have many export members but default onle one
                    2. need keyword default with member name
                    3. during import name is not matter for default member
                    4. Without {} → default export during import

CommonJS:
--------    module.exports = LoginPage;
            const LoginPage = require("./LoginPage");


Object Destructuring:
-------------------     const { test } = require("@playwright/test");






## Usefull Feature & Configration

Generate error promt->          1. if any test failded then run with --ui,
--------------------            2. under error tab have copy promt option
                                3. copy that promt ask to any ai

passing pararmeter from json to test cases->
------------------------------------------
                    1. create a data.json file
                    2. create data set as array form
                    3. import credentialsSet from "../utils/testData.json" with { type: "json" };
                    4. run test under for loop for each set of data
                            for(const credentials of credentialsSet){
                                test(){
                                    credentials.username;
                                    credentials.password;
                                }
                            }
                    5. if data is single set then no need to use for loop    


passing parameter from fixture-->
----------------------------------

            1. test have a method named extend like test.only(...)
                                                    test.describe(...)
                                                    test.skip(...)
                                                    test.extend(...), in this method we add new 
            property and export it-->export const customTest = test.extend({testData{}-->
            returns a new version of test that knows about testData.
            2. import it in test-->import {customTest} from "../utils/test_base"
            3. pass it as fixture in test-->customTest("test2",async({page,testData})=>{
            4. now use testData.username, testData.password inside test.


## customization in playwright.config.js
----------------------------------------
1. we can create our own config.js file to customize configuration
    to run this hit command
                    npx playwright test --grep "customf" --config playwright.myConfig.js




## serialization and parallel sequence of test execution
-------------------------------------------------------
default behavior--->    all test run parallelly as per no. of worker availabe.
                        individual test run in sequence.

* parallel execution is depands on workers number from playwright.config.js
* parallel execution in a file depands on command
                        test.describe.configure({mode:"parallel"});-->on top of first test()
* sequnce based --> if any fail then upcoming skipped-> used when depandancy metters
                        test.describe.configure({mode:"serial"});


## Allure report
----------------

note: create result,create report, open report are 3 task which go in a sequence

*  steps for step-up
 ---------------# Install Playwright + Allure adapter
                npm i -D @playwright/test allure-playwright

                # Download browsers
                npx playwright install

                # Install Allure CLI
                npm install -g allure-commandline

                # Verify
                allure --version

                # Run tests
                npx playwright test --reporter=line,allure-playwright-->

                # Open report directly(Generate + Open)
                allure serve allure-results

* step to generate report
-------------------------   npx playwright test --reporter=line,allure-playwright
                            allure serve allure-results
                        


## custom test run command

if we configure package.json
              "scripts": {
                        "test": "npx playwright test API_Test1.spec.js --headed",
                        "regression":"npx playwright test",
                        "webTest":"npx playwright test --grep @web",
                        "APiTest":"npx playwright test --grep @api",
                        "safariTest":"npx playwright test --config playwright.myConfig.js --project=safariTest"
                    },

        then we can run them as 
                    npm run webTest     -->from command prompt 


### Important Point

locator.textContent();-->   1. can return string or null
                            2. if tag dont have inner text then return null
                            3. can Includes hidden text.
.innerText();-->            1. can return only string or empty string ""
                            2. ignore hidden element
                            3. Visible Text Only

why page as fixture-->  default behavior of playwright is parallel execution so they pass page as
                          fixture so that each test have its own page to work but is we pass as global import then this page will share to all test cases and the parallel execution will brock

## cucumber configuration

1. npm install @cucumber/cucumber--> to install cucumber as dependency
2. add extention--> Cucumber (Gherkin) Full Support Alexander Krechik --> give better lanuage support
3. create folder as named 'features'
4. inside create file with extention .feature 
5. .feature file have feature name, scenarion, and steps
6.  add cucumber.js -->runner configuration file for Cucumber-> file which have cucumber
    instruction, path-hooks, ,.feature, stepDefination
7. run command ->   npx cucumber-js     --> test executed but not exit
                    npx cucumber-js     --exit--> test executed and return on terminal
8. for setup,teardown cucumber have hooks-import { After, AfterStep, Before, BeforeStep, Status } from "@cucumber/cucumber";
 and saparete them in different hooks.ts file and configure cucumber.js(not .ts)
9. run perticular test(.feature file)--> npx cucumber-js features/fileName.feature
10. we can make group of test using @Regression,@Validation etc in .feature file
                                    command: npx cucumber-js --tags "@Regression"
11. tags also available for hooks file method After, AfterStep, Before
            -->Before({tags:"@smoke"},function(){}) and other multiple combination 
                of tags use is available
12. parameterized scenarion
    Exmple:-
    
    Feature: User Authentication

            As a registered user
            I want to log in securely
            So that I can access my account

    Scenario Outline: User cannot log in with invalid credentials

        Given   the user is on the login page
        When    the user logs in with username "<username>" and password "<password>"
        Then    an authentication error message is displayed

        Examples:
        | username           | password          |
        | Value 2            | Value 3           |
        | abcdef             | 1354564           |
        | rahulshettyacademy | Learning@830$3mK2 |

        1. to pass data use "<data>" --> here "" is require in test like log("manish"), "" not part
            of parameter passing specific 
        2. name matching is important to example
        3. squence of parameter is important
        4. test run for each pair to data
13. parallel execution:
    * limitaion -   in cucumber we can't run .feature files parallely but in a .feature file
                        multiple scenario can run parallely.

    command:-       npx cucumber-js features/ParallelExecution.feature --parallel 2  -->(2,3,4-test parallel)


14. html report generation
                just add in last --format html:fileName.html
                                npx cucumber-js --parallel 2 --format html:myCucumber-report.html
15 Retry failed test
                just add in last --retry 1
                                npx cucumber-js --retry 1

