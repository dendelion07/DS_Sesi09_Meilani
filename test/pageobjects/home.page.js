const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }
    get ButtonaddToCartBackpack () { return $('#add-to-cart-sauce-labs-backpack'); }
    get ButtonRemoveBackpack () { return $('#remove-sauce-labs-backpack'); }

    async validateHomePage() {
        expect(browser).toHaveLinkContaining('/inventory.html')
        expect(this.iconCart).toBeDisplayed()
        
    }

    async addBackpackToCart() {
        await this.ButtonaddToCartBackpack.click()
    }

    async removeBackpackFromCart() {
        await this.ButtonRemoveBackpack.click()
    }



    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
