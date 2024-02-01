import {test, expect} from "@playwright/test"

test.describe.skip('File Upload', () => {
    test('upload a local file', async ({page}) => {
        await page.goto("https://tus.io/demo")
        await page.locator('[id="P0-0"]').setInputFiles('e2e/visualValidation.spec.js-snapshots/header.png')
        await expect(page.getByText('The upload is complete!')).toBeVisible()
    })
})