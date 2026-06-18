Feature: E-Commerce Credential Validation
    @Regression
    Scenario: with invalid credential error message should displayed
        Given user try login on "https://rahulshettyacademy.com/loginpagePractise/" with invalid username "abcefgh" and invalid password "123456"
        Then error message is displayed 