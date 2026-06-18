Feature: E-Commerce Validation
    @smoke
    Scenario: Placing the order
        Given A valid login on "https://rahulshettyacademy.com/client/#/auth/login" with "anshika@gmail.com" and "Iamking@000"
        When Add "ZARA COAT 3" to cart
        Then varify "ZARA COAT 3" is displayed in cart
        When Enter valid payment details and place order
        Then Verify order is present in orders list


    @Regression
    Scenario: with invalid credential error message should displayed
        Given user try login on "https://rahulshettyacademy.com/loginpagePractise/" with invalid username "abcefgh" and invalid password "123456"
        Then error message is displayed 