const {test, expect} = require("@playwright/test")

test.describe('Multi Tabbing', () => {
    test('should test multiple tabs - organic', async ({page, context}) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await expect(page.locator('button').filter({hasText: 'New Browser Window'})).toBeVisible()
        const pagePromise = context.waitForEvent('page');
        await page.locator('button').filter({hasText: 'New Browser Window'}).click()
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        console.log(await newPage.title());
    })

    test('should test multiple tabs - open new tab', async ({page, context}) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        // Create new tab
        const newTab = await context.newPage()
        await newTab.goto('https://www.google.com')
        await expect(newTab.getByRole('navigation')).toBeVisible()
        await page.bringToFront()
        await expect(page.locator('button').filter({hasText: 'New Browser Window'})).toBeVisible()
        await newTab.close()
    })
})