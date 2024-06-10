import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("First name").click();
  await page.getByLabel("First name").fill("John");
  await page.getByLabel("First name").press("Tab");
  await page.getByLabel("Last name").fill("Doe");
  await page.getByRole("button", { name: "Register" }).click();
  await expect(page.getByRole("button", { name: "Clear" })).toBeVisible();
});
