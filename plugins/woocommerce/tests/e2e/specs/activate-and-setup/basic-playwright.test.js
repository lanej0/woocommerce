const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:8084/');
	await expect(page).toHaveTitle(/WooCommerce/);
});
