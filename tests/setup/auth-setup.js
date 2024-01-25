import { test as setup } from '@playwright/test';
import { loginPage } from '../ui/pages/login';

const adminFile = '.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {
  const user = process.env.USERNAME_ADMIN;
  const password = process.env.PASSWORD;
  await doLogin(page, user, password);
  await page.locator('[href="/profile?book=9781449365035"]').waitFor();
  await page.context().storageState({ path: adminFile });
});

async function doLogin(page, user, password) {
    const LoginPage = new loginPage(page);
    await page.goto('https://demoqa.com/login');
    await LoginPage.doLogin(user, password);
}