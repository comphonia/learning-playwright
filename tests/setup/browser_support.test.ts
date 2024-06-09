import { test, chromium, webkit, firefox } from "@playwright/test";

test("Browser support demo", async () => {
  for (const browserType of [chromium, webkit, firefox]) {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.whatismybrowser.com/");

    await page.screenshot({ path: `browser-support-${browserType.name()}.png` });

    await page.close();
    await browser.close();
  }
});
