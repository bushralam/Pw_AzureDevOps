const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/#/login')
    await expect(page).toHaveTitle('Conduit')
})