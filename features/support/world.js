const { setWorldConstructor, setDefaultTimeout }  = require('cucumber')
const { expect } = require('chai');
const puppeteer = require('puppeteer');

class Custom {
    async launchBrowser(){
        this.browser = await puppeteer.launch({ headless: false })
        this.page = await this.browser.newPage()
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async visit() {
        await this.page.goto('https:///www.saucedemo.com/');
    }

    async fillLoginForm(){
        await this.page.waitForSelector('.login-box')
        await this.page.type('[data-test="username"]', 'standard_user')
        await this.page.type('[data-test="password"]', 'secret_sauce')
    }

    async submitLogin() {
        await this.page.waitForSelector('.btn_action')
        await this.page.click('.btn_action')
        await this.page.waitForSelector('.product_label')
    }

    async verifySuccessfulLogin() {
        const element = await this.page.$(".product_label");
        const text = await this.page.evaluate(element => element.textContent, element)
        expect(text).to.be.equal('Products')
    }

    async login(){
        await this.visit()
        await this.fillLoginForm()
        await this.submitLogin()
        await this.verifySuccessfulLogin()
    }

    async addToCart(){
        let item = await this.page.evaluate(function(){
            const uiElement = document.querySelector('.inventory_item_name');
            uiElement.click()
            return uiElement.innerText; 
        })
        await this.page.waitForSelector('.inventory_details_name')
        let itemMenuDetail = await this.page.evaluate(function(){
            const uiElement = document.querySelector('.inventory_details_name');
            return uiElement.innerText; 
        })
        expect(item).to.be.equal(itemMenuDetail);
        await this.page.click('.btn_inventory')
    }

    async clickShopingCart(){
        await this.page.click('#shopping_cart_container')
        await this.page.waitForSelector('.subheader')
    }

    async clickCheckout(){
        await this.page.click('.checkout_button')
        await this.page.waitForSelector('.subheader')
    }

    async fillCheckoutForm(){
        await this.page.waitForSelector('.checkout_info')
        await this.page.type('[data-test="firstName"]', 'Richi')
        await this.page.type('[data-test="lastName"]', 'Ramadhan')
        await this.page.type('[data-test="postalCode"]', '11470')
    }

    async submitCheckout(){
        await this.page.waitForSelector('.cart_button')
        await this.page.click('.cart_button')
        await this.page.waitForSelector('.subheader')
    }

    async clickButtonFinish(){
        await this.page.waitForSelector('.cart_button')
        await this.page.click('.cart_button')
        await this.page.waitForSelector('.subheader')
    }

    async verifyThankyouPage(){
        await this.page.waitForSelector('.complete-header')
        let item = await this.page.evaluate(function(){
            const uiElement = document.querySelector('.complete-header');
            uiElement.click()
            return uiElement.innerText; 
        })
        expect(item).to.be.equal('THANK YOU FOR YOUR ORDER')
    }
}

setDefaultTimeout(60 * 1000);
setWorldConstructor(Custom)