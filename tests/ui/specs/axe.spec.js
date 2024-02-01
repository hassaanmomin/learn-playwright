import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('https://www.staples.ca/');

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag21aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});