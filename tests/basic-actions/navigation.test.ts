import { expect, test } from "@playwright/test";

test("Back, forward, refresh test", async ({ page, baseURL }) => {
  await page.goto("/");

  await page.goto("/savings.html");
  await expect(page).toHaveURL("/savings.html");
  await expect(page).toHaveTitle("Save with us");

  await page.goBack();
  expect(page.url()).toBe(baseURL);

  await page.goForward();
  expect(page).toHaveTitle("Save with us");

  await page.reload();
  expect(page).toHaveTitle("Save with us");
});

test("Check that form validations are displayed on errors and is hidden on reset", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Register" }).click();
  const elValidationErrors = page.locator(".invalid-feedback");

  await expect(elValidationErrors).toHaveCount(3);
  for (const element of await elValidationErrors.all()) {
    await expect(element).toBeVisible();
  }

  await page.reload();

  const elValidationErrors2 = await page.locator(".invalid-feedback").all();
  for (const element of elValidationErrors2) {
    await expect(element).not.toBeVisible();
  }
});
