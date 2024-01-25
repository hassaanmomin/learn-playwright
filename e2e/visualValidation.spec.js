const { test, expect } = require('@playwright/test');

test.describe('Visual Validation Test', () => {
    test('Check if the current page matches the baseline screenshot', async ({page}) => {
        await page.goto('https://kitchen.applitools.com/')
        await expect(page).toHaveScreenshot({fullPage: true})
        await page.locator('h1').filter({hasText: 'The Kitchen'}).screenshot()
        await expect(page.locator('h1').filter({hasText: 'The Kitchen'})).toHaveScreenshot();
    })
})