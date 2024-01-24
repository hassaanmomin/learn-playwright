const { expect } = require('@playwright/test')

exports.loginPage = class loginPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page
        this.loginLink = page.locator('id=login2')
        this.loginModal = page.locator('id=logInModal')
        this.usrTextbox = page.locator('#loginusername')
        this.pwdTextbox = page.locator('[id="loginpassword"]')
        this.loginBtn = page.getByRole('button').filter({ hasText: 'Log in' })
        this.logoutBtn = page.getByText('Log out')
    }

    async login(username, password) {
        await expect(this.loginLink).toBeVisible()
        await this.loginLink.click()
        await expect(this.loginModal).toBeVisible()
        await this.usrTextbox.fill(username)
        await this.pwdTextbox.fill(password)
        await this.loginBtn.click()
        await expect(this.logoutBtn).toBeVisible()
    }
}