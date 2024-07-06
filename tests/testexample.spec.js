// @ts-check
const { test, expect } = require('@playwright/test');

test('Fill out the test registration form', async ({ page }) => {
    // Open the test page
    await page.goto('https://demoqa.com/automation-practice-form');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);

    // Input First and Last name
    await expect(page.getByText('Name')).toBeVisible();
    await page.getByPlaceholder('First Name').fill('Firstname');
    await page.getByPlaceholder('Last Name').fill('Lastname');

    // Input Email
    await expect(page.getByText('Email')).toBeVisible();
    await page.getByPlaceholder('name@example.com').fill('flname@email.test');

    // Choose Gender
    await expect(page.getByText('Gender')).toBeVisible();
    await page.getByText('Female').click();

    // Input Phone
    await expect(page.getByText('Mobile')).toBeVisible();
    await page.getByPlaceholder('Mobile Number').fill('0123456789');
});
