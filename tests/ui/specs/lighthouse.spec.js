import { playAudit } from 'playwright-lighthouse';
import { test, chromium } from '@playwright/test'

const options = {
    loglevel: "info"
}

test.describe.skip('Lighthouse Audit', () => {
    test(`Ligthouse performance test`, async () => {
        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
            headless: true
        });
        const page = await browser.newPage();
        await page.goto('https://www.staples.ca/');
        await playAudit({
            page: page,
            port: 9222,
            thresholds: {
                performance: 80,
                accessibility: 70,
                seo: 50
            },
            opts: options,
            reports: {
                formats: {
                    html: true,
                },
                name: `ligthouse-${new Date().toISOString()}`,
                //directory: `${process.cwd()}/lighthouse`,
                directory: 'test-results/lighthouse'
            },
        });
        await page.close();
        await browser.close();
    })
});