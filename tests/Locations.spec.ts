import { test, expect } from "@playwright/test";

test.describe("Navigate to Locations page, test are divided in test steps", () => {
  console.log("Starting the test");

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const headerText = page
      .locator("a")
      .filter({ hasText: "Welcome to Rick And Morty's" });
    await expect(headerText).toBeVisible();
  });

  test("User navigates to Locations", async ({ page }) => {
    // Console message listener
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        console.error(`Error occurred: ${msg.text()}`);
      } else {
        console.log(`Console message: ${msg.text()}`);
      }
    });

    // Variables
    const headerText = page
      .locator("a")
      .filter({ hasText: "Welcome to Rick And Morty's" });

    const clickYellowImageText = page.getByText("Click the yellow image");

    const headLine = page.getByText(
      "Welcome to Rick And Morty's Fantastic UniverseWelcome to the fantastic Universe"
    );
    const locationsHeader = page.getByRole("heading", {
      name: "Locations",
      exact: true,
    });
    const iconLinkButton = page.getByRole("link", {
      name: "icon-link-to-locations",
      exact: true,
    });
    const typesDropdown = page
      .locator("div")
      .filter({ hasText: /^All Types$/ })
      .nth(2);
    const dimensionsDropdown = page
      .locator("div")
      .filter({ hasText: /^All Dimensions$/ })
      .nth(2);
    const locationCardEarthC137 = page.getByRole("link", {
      name: "planet Earth (C-137)",
    });
    const locationsUL = page.getByTestId("locations");
    const paginationComponent = page.getByLabel("Pagination");
    const nextButton = page.getByRole("button", { name: "Next", exact: true });
    const prevButton = page.getByRole("button", {
      name: "Previous",
      exact: true,
    });
    // End of Variables

    // Test steps
    console.log("Starting test steps");

    await test.step("Users arrive on the landing page, and the components successfully load.", async () => {
      await expect(headerText).toBeVisible();
      await expect(headLine).toBeVisible();
      await expect(clickYellowImageText).toBeVisible();
      await expect(iconLinkButton).toBeVisible();
    });
    console.log("Landing page loaded successfully");

    await test.step("User clicks the iconLink Button to navigate to Locations page", async () => {
      await iconLinkButton.click();
      await expect(page).toHaveURL("http://localhost:3000/locations/1");
      await expect(locationsHeader).toBeVisible();
    });
    console.log("User clicks the iconButton succesfully");

    await test.step("Check so Dropdown filters loads correctly", async () => {
      await expect(typesDropdown).toBeVisible();
      await expect(dimensionsDropdown).toBeVisible();
    });
    console.log("Filter components loads successfully");

    await test.step("Locations page correctly displays the components for the first 20 location items on page one.", async () => {
      await expect(locationsUL).toBeVisible();
      await expect(locationCardEarthC137).toBeVisible();

      // Console number of items that are rendered
      const locationItems = await page.$$('[data-testid="location-item"]');
      console.log(
        "There are " +
          locationItems.length +
          " Location item showing on the Locations page 1"
      );
      // Iterate over the found elements and log their innerText
      for (const locationItem of locationItems) {
        const textContent = await locationItem.innerText();
        console.log("Page 1/Location Item name: " + textContent);
      }
    });
    console.log("The first 20 Locations items on page oneloads successfully");

    await test.step("Ensure that pagination components are displayed, previous button should be disabled", async () => {
      await expect(paginationComponent).toBeVisible();
      await expect(prevButton).toBeDisabled();
      await expect(nextButton).toBeVisible();
    });
    console.log("Pagination with disabled Previous button loads successfully");
  });
});

test.afterAll(async () => {
  console.log("Done with test for User navigates to the Locations view");
});
