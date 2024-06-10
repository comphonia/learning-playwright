import test, { expect } from "@playwright/test";

test("Simple assertions", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Credit Association");
  await expect(page).toHaveURL("http://localhost:3000");
});
