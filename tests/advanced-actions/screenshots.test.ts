import test, { expect } from "@playwright/test";

// consider an  attribute like data-sensitive="password" to mask the password field
test("Basic test", async ({ page }) => {
  page.goto("");

  await page.getByRole("button", { name: "Register" }).click();

  const buffer = page.screenshot({
    path: "screenshots/screenshot.png",
  });

  await expect(page.getByText("You are visiting")).toBeVisible();

  page.screenshot({ path: "screenshots/screenshot-masked.png", fullPage: true, mask: await page.getByTestId("location").all() });

  await expect(page.locator(".invalid-feedback")).toHaveCount(3); // correct count is 3
});
