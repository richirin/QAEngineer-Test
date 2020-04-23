const {Given, When, Then, Before, After} = require('cucumber');

When("I want to add product to the cart", async function()  {
    return await this.addToCart();
})

When("I click on the shopping cart", async function() {
    return await this.clickShopingCart();
})

When("I want to click checkout", async function() {
    return await this.clickCheckout();
})

When("I fill the form", async function(){
    return await this.fillCheckoutForm();  
})

When("I click on checkout submit button", async function(){
    return await this.submitCheckout();
})

When("I click on finish button", async function(){
    return await this.clickButtonFinish();
})

Then("I expect to see thankyou page", async function(){
    return await this.verifyThankyouPage();
})