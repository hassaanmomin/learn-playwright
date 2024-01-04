import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  // had to add the next line manually
  await expect(page.getByLabel('playwright', {exact: true})).toBeVisible();
  await page.getByLabel('Search', { exact: true }).press('ArrowDown');
  await page.getByLabel('Search', { exact: true }).press('Enter')
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.getByLabel('Main', { exact: true })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Writing tests');
});