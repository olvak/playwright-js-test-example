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

    // Select DOB
    await expect(page.getByText('Date of Birth')).toBeVisible();
    await page.locator('input[id="dateOfBirthInput"]').click();
    await page.selectOption('[class="react-datepicker__month-select"]', 'January');
    await page.selectOption('[class="react-datepicker__year-select"]', '2000');
    await page.locator('[aria-label="Choose Saturday, January 1st, 2000"]').click();

    // Select Subjects
    await expect(page.getByText('Subjects')).toBeVisible();
    await page.locator('[id="subjectsContainer"]').click();
    await page.keyboard.type('English');
    await page.keyboard.press('Enter');
    await page.locator('[id="subjectsContainer"]').click();
    await page.keyboard.type('History');
    await page.keyboard.press('Enter');
    await page.locator('[id="subjectsContainer"]').click();
    await page.keyboard.type('Arts');
    await page.keyboard.press('Enter');

    // Check Hobbies
    await expect(page.getByText('Hobbies')).toBeVisible();
    await page.locator('label[for="hobbies-checkbox-2"]').click();
    await page.locator('label[for="hobbies-checkbox-3"]').click();

    // Upload the Picture
    await expect(page.getByText('Select picture')).toBeVisible();
    await page.locator('input[id="uploadPicture"]').click();
    await page.locator('input[id="uploadPicture"]').setInputFiles('./tests/fixtures/testpicture.jpeg');

    // Input Address
    await expect(page.getByText('Current Address')).toBeVisible();
    await page.getByPlaceholder('Current Address').fill('123 Street, 45 Apartment');

    // Select State and City
    await expect(page.getByText('State and City')).toBeVisible();
    await page.locator('div[id="state"]').click();
    await page.getByText('Haryana').click();
    await page.locator('div[id="city"]').click();
    await page.getByText('Panipat').click();

    // Send form
    await expect(page.getByText('Submit')).toBeVisible();
    await page.locator('button[id="submit"]').click();
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

    // Take a screenshot of the form
    await page.locator('div[class="modal-dialog modal-lg"]').screenshot({ path: 'formscreenshot.png' });
    
    // Exit modal form
    await page.keyboard.press('Escape');
});
