import test, { expect } from "@playwright/test";

test("Recommended built-in locators", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const firstName = page.getByLabel("First Name");
  await firstName.fill("John");
  await firstName.clear();

  await page.getByRole("button", { name: "Register", exact: true }).click(); // locate by role and name with exact text match

  const warning = page.getByText("Valid last name is required ");
  await expect(warning).toBeVisible();
});
