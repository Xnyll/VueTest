import { test, expect } from '@playwright/test';


test('Screenshotting page after click', async ({ page }) => {
  await page.goto('/');
  await page.click('button');

  // Verify that a specific element appears on the page as a result of the button click
  await expect(page.locator('.test')).toBeVisible();

  // Take a screenshot of the page after the button click
  await page.screenshot({ path: 'screenshot.png' });
  
})

test('Adding a new task', async ({ page }) => {
  await page.goto('/');

  // add task in the input field
  await page.getByRole('textbox').fill('Task');

  // Click the "Add Task" button
  await page.click('.taskButton');
  
  // Wait for the added task to appear in the list
  await page.waitForSelector('.v-list-item-title');

  // Assert that the task has been added to the list
  await expect(page.locator('.v-list-item-title')).toHaveText('Task');
});

test('Marking a task as completed', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox').fill('Task');
  await page.click('.taskButton');

  // Click the checkbox to mark the task as completed
  await page.getByLabel('completed').check();

  // Wait for the completed task styling to be applied
  await page.waitForSelector('.completed-task');

  // Assert that the task is marked as completed
  // await expect(page.locator('.v-list-item-title')).toHaveClass('.completed-task', 'completed-task');
  await expect(page.locator('.completed-task')).toHaveCSS('text-decoration', 'line-through solid rgb(44, 62, 80)');
});

test('Adding a new task updates the list', async ({ page }) => {
  await page.goto('/');

  // Get the initial count of tasks in the list
  const initialTaskCount = await page.locator('.v-list-item-title').count();
  await page.getByRole('textbox').fill('Task');

  // Click the "Add Task" button
  await page.click('.taskButton');

  // await page.waitForSelector('.completed-task');
  // Get the updated count of tasks in the list
  const updatedTaskCount = await page.locator('.v-list-item-title').count();

  // Assert that the list has been updated by checking if the count has increased
  await expect(updatedTaskCount).toBe(initialTaskCount + 1);

  // Assert that the added task is now present in the task list
  await expect(page.locator('.v-list-item-title')).toHaveText('Task');
});