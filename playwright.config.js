// @ts-check

const { trace } = require("node:console");

//just a javascript object which provide some properties to define execution
const config={
  testDir: './tests',//directory of tests which going to run
  timeout:40*1000, //This is a base timeout for all tests
  expect:{        //this for assertions timeout
    timeout:40*1000
  },


 reporter: "html", //generate report format


  use:{
    browserName:'chromium',     //what browser you want to run
    headless:true,              //choose defaul headless/headed execution
    screenshot:"on",            //record screenshot at last of test(failed/passed)
    trace:"on",               //record log for every step for "EVERY TEST" -> this record inside test-result as zip file and open in https://trace.playwright.dev
    //trace:"retain-on-failure"   //recode logs only only in failure 



  }

};

module.exports=config;// Exports the configuration object for Playwright to use


