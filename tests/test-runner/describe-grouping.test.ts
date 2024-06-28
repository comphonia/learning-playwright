import test, { expect } from "@playwright/test";

// useful for grouping tests, order of tests are not guaranteed

test.describe("Grouping tests", () => {
  test("Test 1", async () => {
    expect(true).toBe(true);
  });

  test("Test 2", async () => {
    expect(true).toBe(true);
  });

  test("Test 3", async () => {
    expect(true).toBe(true);
  });
});

test.describe.skip("Describe with a skip", () => {
  test("Test 1", async () => {
    expect(true).toBe(true);
  });
});

test.describe.skip("Describe with a conditional skip", () => {
  test.skip(({ browserName }) => browserName == "chromium", "Test will be skipped conditionally on chromium");

  test("Test 1", async () => {
    expect(true).toBe(true);
  });
});
