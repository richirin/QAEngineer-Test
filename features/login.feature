Feature: Login
    As a user 
    I can login to website

    Scenario: User can login to website
        Given I open login page
        When I fill login form
        And I click on submit button
        Then I expect to see website content