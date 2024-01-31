const { test, expect } = require('@playwright/test')

test.describe('API Interception Test', () => {
    test('should intercept the API call and validate the response from the browser', async ({ page }) => {
        await page.goto('https://reqres.in/')
        await page.locator('[href="/api/users/2"]').filter({hasText: 'Single user'}).waitFor()
        const apiPromise = page.waitForResponse("**/api/users/2")
        await page.locator('[href="/api/users/2"]').filter({hasText: 'Single user'}).click()
        const response = await apiPromise
        const resStatus = response.status()
        console.log(await response.json())
        expect(resStatus,`expect res code to be 200`).toBe(200)
    })

    test('in another way', async({ page }) => {
        await page.goto("https://reqres.in");
        
        let routeCallback;
        const routePromise = new Promise(r => routeCallback = r);
    
        await page.route('**/api/users/2', async route => {
            console.log('url ' + route.request().url());
            // Fetch original response.
            const response = await page.request.fetch(route.request());
            // Add a prefix to the title.
            let status = await response.status();
            console.log(await response.json())
            console.log('status = ' + status);
            routeCallback();
        });
    
        await page.locator('[href="/api/users/2"]').filter({hasText: 'Single user'}).click()
    
        // Wait before /created response is received.
        await routePromise;
    })
})