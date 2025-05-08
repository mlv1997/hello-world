import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
await page.goto('http://localhost:3000');
});
test('user can add a book', async ({ page }) => {
await page.getByTestId('input').fill('Pride and Prejudice');
await page.getByTestId('button').click();
await expect(page.getByText('Pride and Prejudice')).toBeVisible();
});
test('blank titles are not added', async ({ page }) => {
await page.getByTestId('input').fill(' ');
await page.getByTestId('button').click();
const items = await page.getByTestId('list').locator('li').all();
expect(items.length).toBe(0);
});
