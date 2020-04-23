Feature: Order
    As a user 
    I want to order`

    Scenario: User can order
        Given I want to logging in
        When I want to add product to the cart
        And I click on the shopping cart
        And I want to click checkout
        And I fill the form
        And I click on checkout submit button
        And I click on finish button
        Then I expect to see thankyou page