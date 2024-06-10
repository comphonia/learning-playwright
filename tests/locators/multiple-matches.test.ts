import test, { expect } from "@playwright/test";

test("Multiple matches", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("button", { name: "Register" }).click();

  const feedbackLocator = page.locator(".invalid-feedback");
  const feedbackElements = await feedbackLocator.all();

  await expect(feedbackLocator).toHaveCount(3);

  for (const message of feedbackElements) {
    await expect(message).toBeVisible();
    console.log(await message.textContent());
  }
});

// discouraged locator methods, use getByRole instead. These do not return a Locator object
test("Fill test", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.check("#heard-about");
  await page.fill("#textarea", "So I was thinking the other day...");
});

// use the recommended locator methods instead
test("Recommended locators", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.locator("#heard-about").check(); // css selector

  const textarea = page.locator("#textarea");
  await textarea.fill("So I was thinking the other day...");
  await expect(textarea).toHaveValue("So I was thinking the other day...");
});
