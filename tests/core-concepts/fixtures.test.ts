import test from "@playwright/test";

test("Test with Page fixture", async ({ page }) => {
  await page.goto("https://www.whatismybrowser.com/");
  console.log("Page title:", await page.title());
});

test("Other fixtures", async ({ browser, browserName, context, page }) => {
  const page1 = await context.newPage();
  await page1.goto("https://www.whatismybrowser.com/");
  console.log("Page 1 title:", await page1.title());
});
