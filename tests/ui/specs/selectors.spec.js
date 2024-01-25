const { test, expect } = require('@playwright/test')

test.describe('Selectors practice', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })
    
    test('checkboxes', async ({ page }) => {
        await page.locator('#sunday').check()
        expect(await page.locator('#sunday').isChecked()).toBeTruthy()
    })

    test('dropdown', async ({ page }) => {
        await page.locator('#country').selectOption('japan')
        await page.selectOption('#country', 'Japan')
        console.log(await page.locator('#country option').count())
    })

    test('alerts', async ({ page }) => {
       /* page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        await dialog.accept()
       })
       await page.locator('button').filter({ hasText: 'Alert' }).click() */
       
       /* page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()
       })
       await page.locator('button').filter({ hasText: 'Confirm Box' }).click()
       expect(await page.locator('[id="demo"]')).toHaveText('You pressed Cancel!') */

       page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        await dialog.accept('Hassaan')
       })
       await page.locator('button').filter({ hasText: 'Prompt' }).click()
       expect(await page.locator('[id="demo"]')).toHaveText('Hello Hassaan! How are you today?')
    })
})