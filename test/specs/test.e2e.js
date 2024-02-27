const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Swag Labs', () => {
    it('should login with standard_user', async () => {
        // TODO: akan dibuatkan scenario positif case 
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()

    })


    it('should get error login with locked_out_user', async () => {
        // TODO: akan dibuatkan scenario negatif case 
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })


    it('should login with problem_user', async () => {
        // TODO: akan dibuatkan scenario positif case 
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })


    it('should error login with invalid password', async () => {
        // TODO: akan dibuatkan scenario negatif case 
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateInvalidPassword()
    })

    it('should login with standard_user', async () => {
        // TODO: akan dibuatkan scenario positif case 
    })

})