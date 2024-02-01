import { expect, test } from "@playwright/test"

test.describe('Date Picker', () => {
    test('Pick a date', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator('#datepicker').click()
        while(await page.locator('span[class="ui-datepicker-year"]').textContent() != '2023'){
            while (await page.locator('[class="ui-datepicker-month"]').first().textContent() != 'May'){
                await page.locator('[data-handler="prev"]').first().click()
            }
        }
        await page.locator('[data-handler="selectDay"][data-year="2023"]').filter({ hasText: '18' }).click()
    })
})