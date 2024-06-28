import test, { expect } from "@playwright/test";

// Before all and after all hooks are useful for setting up and cleaning up the environment, context and page fixtures are not available in these hooks

test.beforeAll("Before All Hook", async () => {
  console.log("Before All");
});

test.beforeEach("Before Each Hook", async ({ page }) => {
  console.log("Before Each");
});

test("Test 1", async ({ page }) => {
  console.log("Test 1");
  expect(true).toBe(true);
});

test("Test 2", async ({ page }) => {
  console.log("Test 2");
  expect(true).toBe(true);
});

test.afterEach("After Each Hook", async ({ page }) => {
  console.log("After Each");
});

test.afterAll("After All Hook", async () => {
  console.log("After All");
});
