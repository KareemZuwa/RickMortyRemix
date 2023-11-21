import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const headerText = page
    .locator("a")
    .filter({ hasText: "Welcome to Rick And Morty's" });
    await expect(headerText).toBeVisible();
  // await expect(headerText).toHaveText("Welcome to Rick And Morty");
  // await expect(page).toHaveTitle("Rick and Morty");
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
