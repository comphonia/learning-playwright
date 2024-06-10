import test, { expect } from "@playwright/test";

test("Generic locators", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.locator('.needs-validation label[for="firstName"]').fill("John"); // locate by text content
  await page.locator("//form/button[2]").click(); // locate by XPath

  await expect(page.getByText("Valid last name is required")).toBeVisible();
});
