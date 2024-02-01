import { expect, test } from "@playwright/test"

test.describe('iFrames', () => {
    test('Locate frames and interact with elements within', async ({ page }) => {
        await page.goto('https://ui.vision/demo/webtest/frames/')
        // const frame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
        // await frame.fill('[name="mytext3"]', 'Hassaan')
        const inputBox = await page.frameLocator("frame[src='frame_3.html']").locator("[name='mytext3']")
        await inputBox.fill('Hassaan')
        await page.waitForTimeout(3000)
    })

    test('Locate iFrames and interact with elements withion', async ({ page }) => {
        await page.goto('https://ui.vision/demo/webtest/frames/')
        const frame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
        const iFrame = await frame.childFrames()
        await iFrame[0].locator('[id="i19"][role="checkbox"]').click()
    })
})