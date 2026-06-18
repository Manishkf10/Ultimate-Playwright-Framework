// @ts-check
import { devices } from '@playwright/test';
import { worker } from 'node:cluster';
import { permission } from 'node:process';
const { trace } = require("node:console");

//just a javascript object which provide some properties to define execution
const config={
  testDir: './tests',//directory of tests which going to run
  retries:1,          //if any test failed then re run it nth-times
  workers:1,
  timeout:40*1000, //This is a base timeout for all tests
  expect:{        //this for assertions timeout
    timeout:40*1000
  },


 reporter: "html", //generate report format

 projects:[       //to select-->npx playwright test --grep "customf" --config playwright.myConfig.js --project=safariTest
  {
    name:"chromeTest",
      use:{
            browserName:'chromium',           //what browser you want to run
            headless:true,                    //choose defaul headless/headed execution
            screenshot:"on",                  //record screenshot at last of test(failed/passed)
            trace:"on",                       //record log for every step for "EVERY TEST" -> this record inside test-result as zip file and open in https://trace.playwright.dev
            //trace:"retain-on-failure"        //recode logs only only in failure 
            //viewport:{width:720,height:720},//custom size of browser
            //...devices["iPhone X"]          //select device
            ignoreHttpsErrors:true,           //handle ssl-certificate 
            permission:["geolocation"],       //allow geo-location if browser ask
            video:"retain-on-failure"

          }
  },
  {
    name:"safariTest",
        use:{
            browserName:'webkit',     
            headless:true,           
            screenshot:"on",            
            trace:"on",  
            //...devices["iPad (gen 6) landscape"],//browser window as per apple devices
             video:"retain-on-failure"
          }
  }
 ]


};

module.exports=config;// Exports the configuration object for Playwright to use


