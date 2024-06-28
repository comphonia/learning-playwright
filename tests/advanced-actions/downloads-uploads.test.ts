import { expect, test } from "@playwright/test";

test.use({ headless: true });

test("Download a file", async ({ page }) => {
  await page.goto("/savings.html");

  const downloadPromise = page.waitForEvent("download");

  await page.getByText("Download Our Offer").click();

  const download = await downloadPromise;

  // save locally
  const suggestedFilename = download.suggestedFilename();
  const filePath = "download/" + suggestedFilename;
  await download.saveAs(filePath);

  // check if the download was successful
  expect(await download.failure()).toBeNull();

  // check if the file exists
  const fs = require("fs");
  expect(fs.existsSync(filePath)).toBeTruthy();
  const fileSizeInBytes = fs.statSync(filePath).size;
  expect(fileSizeInBytes).toBeGreaterThan(0);
  expect(fileSizeInBytes).toBeLessThan(100_000);
});

test("Upload a file", async ({ page }) => {
  await page.goto("/loans.html");

  const uploadInput = page.locator('input[type="file"]');
  await uploadInput.setInputFiles("download/dummy.pdf"); // use array for multiple files

  console.log(uploadInput);
  // check if the file was uploaded
  expect(uploadInput).toHaveValue.toString().includes("dummy.pdf");
});
