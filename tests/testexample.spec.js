// @ts-check
const { test, expect } = require('@playwright/test');

test('Fill out the test registration form', async ({ page }) => {
    // Open the test page
    await page.goto('https://demoqa.com/automation-practice-form');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
});
