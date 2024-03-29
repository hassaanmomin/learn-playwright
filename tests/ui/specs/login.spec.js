import { test, expect } from '@playwright/test'
import { loginPage } from '../pages/login'

/* let context
let page
test.beforeAll(async ({browser}) => {
    context = browser.newContext()
    await context.tracing.start({snapshots: true, screenshots: true})
    page = await context.newPage()
})

test.afterAll(async () => {
    await context.tracing.stop({path: 'test_trace.zip'})
}) */

test.use({ storageState: '.auth/admin.json' })

test.describe.skip('Learn', () => {
    test('Login using valid credentials', async ({ page, context }) => {
        //const Login = new loginPage(page)
        await page.goto('https://demoqa.com/profile')
        expect(await page.getByText('Currently you are not logged into the Book Store application, please visit the login page to enter or register page to register yourself.')).not.toBeVisible()

        //await Login.login('pavanol', 'test@123')

        /* await page.locator('id=login2').click()
        await expect(page.locator('id=logInModal')).toBeVisible()
        await page.fill('#loginusername', 'pavanol')
        await page.fill('[id="loginpassword"]', 'test@123')
        // await page.getByRole('button').filter({hasText: 'Log in'}).click()
        await page.locator('[id="logInModal"] button').last().click()
        await expect(page.getByText('Log out')).toBeVisible()
        // await page.pause() */
    })

    /*  test('Working with multiple elements', async ({ page }) => {
          await page.goto('https://demoblaze.com/index.html')
          await page.locator('[class="card-title"]').first().waitFor();
          const products = await page.$$('[class="card-title"] a');
          for (const product of products) {
              const name = await product.textContent();
              console.log(name);
          }
      }) */
})
