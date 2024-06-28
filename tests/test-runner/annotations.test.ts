import { test, expect } from "@playwright/test";

// test.skip(); used to skip whole suite

test.skip("Test will be skipped", async () => {
  expect(true).toBe(false);
});

test("Test will be skipped conditionally", async ({ page }) => {
  test.skip((await page.getByTestId("non-existent-id").count()) === 0, "Test will be skipped conditionally");
  expect(true).toBe(false);
});

test.fixme("Test will be skipped, for documentation purposes", async () => {
  expect(true).toBe(false);
});

test("Expect the test to fail", async () => {
  test.fail(); // If we expect to fail and it does, the test will pass

  expect(true).toBe(false);
});
