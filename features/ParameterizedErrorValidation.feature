Feature: E-Commerce Credential Validation
    @Regression
    @foo
    Scenario Outline: with invalid credential error message should displayed
        Given user try login on "<url>" with invalid username "<username>" and invalid password "<password>"
        Then error message is displayed

        Examples:
                | url                                                | username           | password          | 
                | https://rahulshettyacademy.com/loginpagePractise/  | Value 2            | Value 3           | 
                | https://rahulshettyacademy.com/loginpagePractise/  | abcdef             | 1354564           |
                | https://rahulshettyacademy.com/loginpagePractise/  | hulshettyacademy | Learning@830$3mK2 |