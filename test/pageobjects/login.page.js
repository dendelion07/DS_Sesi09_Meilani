const { $, expect} = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    get errorLockedOutUser () { return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}
    get errorInvalidPassword () { return $('//h3[text()="Epic sadface: Username and password do not match any user in this service"]')}

    async login () {
        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError () {
        expect(this.errorLockedOutUser).toBeDisplayed()
    }

    async loginWithProblemUser () {
        await this.fieldUsername.setValue(process.env.USERNAME_PROBLEM_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateInvalidPassword () {
        expect(this.errorInvalidPassword).toBeDisplayed()
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
